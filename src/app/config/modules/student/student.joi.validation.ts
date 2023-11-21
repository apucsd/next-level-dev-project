import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .trim()
    .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
    .message(
      '{#label} must start with an uppercase letter and the rest must be lowercase',
    ),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/, { name: 'alpha' })
    .message('{#label} must contain only letters'),
});
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  contactNo: Joi.string().required(),
  occupation: Joi.string().required(),
  address: Joi.string().required(),
});
const studentValidationSchema = Joi.object({
  id: Joi.string().optional(), // Assuming id is optional
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string().required(),
  contactNo: Joi.string().required(),
  emergencyNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
  ),
  email: Joi.string().email().required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().required(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
