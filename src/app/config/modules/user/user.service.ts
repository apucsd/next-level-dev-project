import config from '../..';
import { Student } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};
  //  if password is not provided then use default password
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  //manually generated id
  userData.id = '202300002';

  //////////////////////

  const newUser = await UserModel.create(userData);
  if (Object.keys(newUser).length) {
    //set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id //user collection id
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
