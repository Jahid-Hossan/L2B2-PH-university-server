import { AcademicSemesterNameAndCodeMapper } from './academecSemister.constants';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (paylod: TAcademicSemester) => {
  if (AcademicSemesterNameAndCodeMapper[paylod.name] !== paylod.code) {
    throw new Error('Invalid Semester code');
  }

  const result = await AcademicSemester.create(paylod);
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    AcademicSemesterNameAndCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterIntoDb,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
};
