import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/config/modules/student/student.route';
import { userRoute } from './app/config/modules/user/user.routes';

//parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
});

export default app;
