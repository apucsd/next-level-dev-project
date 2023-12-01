import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { studentServices } from './student.service';
import sendResponse from '../../../../utils/sendResponse';
import catchAsync from '../../../../utils/catchAsync';

////

const getStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const student = await studentServices.getStudentFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Students fetched successfully',
    data: student,
  });
});
const getSingleStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const student = await studentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student fetched successfully',
    data: student,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  const result = await studentServices.deleteStudent(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is deleted successfully',
    data: result,
  });
});
export const studentController = {
  getStudent,
  getSingleStudent,
  deleteStudent,
};
