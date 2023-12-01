import express from 'express';
import { academicController } from './academicSemester.controller';
import validateRequest from '../../../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.academicSemesterValidationSchema),
  academicController.createAcademicSemester,
);
router.get('/', academicController.getAcademicSemester);
router.get('/:semesterId', academicController.getSingleAcademicSemester);
router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.UpdatedAcademicSemesterValidationSchema,
  ),
  academicController.updateSingleAcademicSemester,
);

export const academicSemesterRoutes = router;
