import { academicSemesterNameCodeMappers } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //academicSemesterNameCodeMappers['Fall'] = '03' but paichi payload.code = '01'
  ////////////////////////////////=>>>>>>>>>>>>>>>>>>>>>>>>>>>
  ////////////////////////////////
  if (academicSemesterNameCodeMappers[payload.name] !== payload.code) {
    throw new Error('Academic Semester Name and Code not valid');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findOne({ _id: id });
  return result;
};
const updateSingleAcademicSemesterFromDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMappers[payload.name] !== payload.code
  ) {
    throw new Error('Academic Semester Name and Code not valid');
  }
  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterIntoDB,
  getAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateSingleAcademicSemesterFromDB,
};
