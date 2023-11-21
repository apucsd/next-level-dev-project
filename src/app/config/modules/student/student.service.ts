import { Student } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  // const result = await StudentModel.create(student); //build in mongoose static method
  // const student = new StudentModel(studentData);
  // const result = await student.save();

  // if (await student.isExists(studentData.id)) {
  //   throw new Error('Student is already exits');
  // }
  return result;
};
const getStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.find({ id: id });
  const result = await StudentModel.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudent = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getStudentFromDB,
  getSingleStudentFromDB,
  deleteStudent,
};
