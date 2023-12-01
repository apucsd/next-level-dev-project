import { RequestHandler } from 'express';
import { userService } from './user.service';
import sendResponse from '../../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../../utils/catchAsync';
const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;

  const result = await userService.createStudentIntoDB(password, student); //validated data getting from Joi

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  });
});

export const userController = {
  createStudent,
};
