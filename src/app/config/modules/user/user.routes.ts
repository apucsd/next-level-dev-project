import express from 'express';
import { userController } from './user.controller';
import StudentValidationSchema from '../student/student.zod.validation';
import validateRequest from '../../../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(StudentValidationSchema),
  userController.createStudent,
);

export const userRoute = router;
