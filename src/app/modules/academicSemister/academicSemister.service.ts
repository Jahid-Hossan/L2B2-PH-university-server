import { AcademicSemisterNameAndCodeMapper } from './academicSemister.constants';
import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

const createAcademicSemisterIntoDb = async (paylod: TAcademicSemister) => {
  if (AcademicSemisterNameAndCodeMapper[paylod.name] !== paylod.code) {
    throw new Error('Invalid semister code');
  }

  const result = await AcademicSemister.create(paylod);
  return result;
};

export const academicSemisterService = {
  createAcademicSemisterIntoDb,
};
