import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../..';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

//using middleware hooks pre and post : its work on create method
userSchema.pre('save', async function () {
  const data = this;
  data.password = await bcrypt.hash(data.password, Number(config.salt_rounds));
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', userSchema);
