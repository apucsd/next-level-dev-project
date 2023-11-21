import { Request, Response } from 'express';
import Joi from 'joi';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.joi.validation';
import StudentValidationSchema from './student.zod.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    //joi schema
    // const { error, value } = studentValidationSchema.validate(student);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }
    const studentZodParseData = StudentValidationSchema.parse(student);
    // console.log('student parse data ', studentZodParseData);

    /// service
    const result =
      await studentServices.createStudentIntoDB(studentZodParseData); //validated data getting from Joi
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
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
  createStudent,
  getStudent,
  getSingleStudent,
  deleteStudent,
};
