import { z } from 'zod';
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  Months,
} from './academicSemister.constants';

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemisterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemisterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const academicSemisterValidation = {
  createAcademicSemisterValidationSchema,
};
