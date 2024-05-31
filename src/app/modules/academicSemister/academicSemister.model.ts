import { Schema, model } from 'mongoose';
import { TAcademicSemister } from './academicSemister.interface';
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  Months,
} from './academicSemister.constants';

const academicSemisterSchema = new Schema<TAcademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemisterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemisterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

academicSemisterSchema.pre('save', async function (next) {
  const isSemisterExist = await AcademicSemister.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemisterExist) {
    throw new Error('Semister is already exist');
  }

  next();
});

export const AcademicSemister = model<TAcademicSemister>(
  'AcademicSemisterSchema',
  academicSemisterSchema,
);
