import { Request, Response } from 'express';

import { studentServices } from './student.service';




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

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    const result = await studentServices.deleteStudent(id);
    res.status(200).json({
      success: true,
      message: 'single Student Is Here',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  getStudent,
  getSingleStudent,
  deleteStudent,
};
