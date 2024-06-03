import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../utils/validateRequest';
import { academicFacultValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultValidation.createAcademicFacultValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(
    academicFacultValidation.updateAcademicFacultValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculties,
);

router.get('/:facultyId', academicFacultyController.getSingleAcademicFaculties);
router.get('/', academicFacultyController.getAllAcademicFaculties);

export const academicFacultyRoutes = router;
