import { Student } from './student.interface';
import StudentModel from './student.model';

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
  getStudentFromDB,
  getSingleStudentFromDB,
  deleteStudent,
};
