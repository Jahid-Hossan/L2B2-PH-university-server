import express from 'express';
import { AcademicSemisterController } from './academicSemister.controller';
import validateRequest from '../../utils/validateRequest';
import { academicSemisterValidation } from './academicSemister.validation';
const router = express.Router();

router.post(
  '/create-academic-semister',
  validateRequest(
    academicSemisterValidation.createAcademicSemisterValidationSchema,
  ),
  AcademicSemisterController.createAcademicSemister,
);

export const academicSemisterRoutes = router;
