import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
//will call controller function
router.get('/', studentController.getStudent);
router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:id', studentController.deleteStudent);
export const studentRoutes = router;
