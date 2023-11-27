export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
