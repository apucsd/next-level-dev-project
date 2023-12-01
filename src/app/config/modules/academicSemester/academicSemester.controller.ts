import { RequestHandler } from 'express';
import sendResponse from '../../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../../utils/catchAsync';
import { academicSemesterService } from './academicSemester.service';
const createAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const academicSemester = req.body;

    const result =
      await academicSemesterService.createAcademicSemesterIntoDB(
        academicSemester,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  },
);
const getAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await academicSemesterService.getAcademicSemesterFromDB();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Semester Fetched successfully',
      data: result,
    });
  },
);
const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result =
      await academicSemesterService.getSingleAcademicSemesterFromDB(
        req.params.semesterId,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Single Academic Semester Fetched successfully',
      data: result,
    });
  },
);
const updateSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res, next) => {
    const updatedAcademicSemester = req.body;
    const { semesterId } = req.params;
    const result =
      await academicSemesterService.updateSingleAcademicSemesterFromDB(
        semesterId,
        updatedAcademicSemester,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Updated Single Academic Semester successfully',
      data: result,
    });
  },
);

export const academicController = {
  createAcademicSemester,
  getAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
