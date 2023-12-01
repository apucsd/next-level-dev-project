import { Router } from 'express';
import { studentRoutes } from '../app/config/modules/student/student.route';
import { userRoute } from '../app/config/modules/user/user.routes';
import { academicSemesterRoutes } from '../app/config/modules/academicSemester/academicSemester.route';

const router = Router();

router.use('/users', userRoute);
router.use('/students', studentRoutes);
router.use('/academic-semesters', academicSemesterRoutes);

export default router;
