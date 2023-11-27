import { Router } from 'express';
import { studentRoutes } from '../app/config/modules/student/student.route';
import { userRoute } from '../app/config/modules/user/user.routes';

const router = Router();

router.use('/users', userRoute);
router.use('/students', studentRoutes);

export default router;
