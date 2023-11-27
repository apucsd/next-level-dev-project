import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentModel,
  UserName,
} from './student.interface';
import config from '../..';

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'first name field is required'],
    maxlength: [20, 'first name maxlength is 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const capitalizeValue =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

        return value === capitalizeValue;
      },
      message: '{VALUE} is not capitalized',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'last name field is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid value',
    },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardian = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<Student, StudentModel>(
  {
    id: { type: String, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'User',
    },
    password: { type: String, unique: true },
    name: {
      type: userSchema,
      required: [true, 'name field is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    dateOfBirth: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    },
    email: { type: String, required: true, unique: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardian,
      required: true,
    },
    profileImg: { type: String, required: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//using middleware hooks pre and post : its work on create method
studentSchema.pre('save', async function () {
  const data = this;
  data.password = await bcrypt.hash(data.password, Number(config.salt_rounds));
});

studentSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

studentSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

studentSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: false } });
  console.log(this.pipeline());
  next();
});

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
// studentSchema.methods.isExists = async function (id: string) {
//   const existingStudent = await StudentModel.findOne({ id });
//   return existingStudent;
// };

const StudentModel = model<Student>('student', studentSchema);

export default StudentModel;
