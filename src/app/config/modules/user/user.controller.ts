import { Request, Response } from 'express';
import { userService } from './user.service';
import { userValidation } from './user.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    //   const userZodParseData = userValidation.userValidationSchema.parse(student);

    const result = await userService.createStudentIntoDB(password, student); //validated data getting from Joi
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

export const userController = {
  createStudent,
};
