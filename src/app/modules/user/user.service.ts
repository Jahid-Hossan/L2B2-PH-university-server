import config from '../../config';
import { TStudent } from '../Student/student.interface';
import { Student } from '../Student/student.model';
import { AcademicSemester } from '../academicSemister/academicSemester.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = 'student';

  const admissionSemister = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  userData.id = await generateStudentId(admissionSemister);

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
