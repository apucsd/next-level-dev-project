import { Request, Response, NextFunction } from 'express';
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};

export default globalErrorHandler;
