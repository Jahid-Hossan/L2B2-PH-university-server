import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { academicSemisterService } from './academicSemister.service';

const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterService.createAcademicSemisterIntoDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const AcademicSemisterController = {
  createAcademicSemister,
};
