import { Request, Response } from 'express';
import StudentModel from './student.model';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    /// service
    const result = await studentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.getStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All Student Is Here',
      data: student,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const student = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single Student Is Here',
      data: student,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
