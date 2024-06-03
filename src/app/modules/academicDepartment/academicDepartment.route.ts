import express from 'express';

import validateRequest from '../../utils/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartments,
);

router.get(
  '/:facultyId',
  academicDepartmentController.getSingleAcademicDepartments,
);
router.get('/', academicDepartmentController.getAllAcademicDepartments);

export const academicDepartmentRoutes = router;
