import express from 'express';

import validateRequest from '../../utils/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

router.get(
  '/:semesterId',
  AcademicSemesterController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

router.get('/', AcademicSemesterController.getAllAcademicSemesters);

export const academicSemesterRoutes = router;
