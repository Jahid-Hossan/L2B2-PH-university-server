import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../utils/validateRequest';
import { studentValidationSchema } from '../Student/student.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
