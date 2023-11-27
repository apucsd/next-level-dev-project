import { Model, Types } from 'mongoose';

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGuardian = {
  name: string;
  contactNo: string;
  occupation: string;
  address: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  contactNo: string;
  emergencyNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

  email: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
};

export type StudentMethods = {
  isExists(id: string): Promise<Student | null>;
};

export type StudentModel = Model<
  Student,
  Record<string, never>,
  StudentMethods
>;
