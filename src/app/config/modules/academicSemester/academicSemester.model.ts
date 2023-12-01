import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Month,
    },
  },
  {
    timestamps: true,
  },
);
/// use pre for find exiting semester name in same year
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExits = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExits) {
    throw new Error('This Semester is already exists');
  }
  next();
});
export const AcademicSemesterModel = model<TAcademicSemester>(
  'Academic-semester',
  academicSemesterSchema,
);
