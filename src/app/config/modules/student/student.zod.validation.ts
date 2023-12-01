import { z } from 'zod';
/// zod validate
const UserNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string(),
  lastName: z.string().max(20),
});

const GuardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianSchema = z.object({
  name: z.string(),
  contactNo: z.string(),
  occupation: z.string(),
  address: z.string(),
});

const StudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: UserNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      contactNo: z.string(),
      emergencyNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
      email: z.string().email(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: GuardianSchema,
      localGuardian: LocalGuardianSchema,
      admissionSemester: z.string(),
      profileImg: z.string(),
    }),
  }),
});

export default StudentValidationSchema;
