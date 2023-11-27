import { RequestHandler } from 'express';
import { userService } from './user.service';
import sendResponse from '../../../middlewares/sendResponse';
import httpStatus from 'http-status';
const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;

    const result = await userService.createStudentIntoDB(password, student); //validated data getting from Joi

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createStudent,
};
