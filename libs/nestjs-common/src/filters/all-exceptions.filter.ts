import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ExceptionResponse } from '../interfaces/exception-response.interface';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;

    const error =
      typeof exceptionResponse === 'object' && exceptionResponse !== null
        ? (exceptionResponse as ExceptionResponse)
        : {
            message: exception?.message || 'Internal server error',
            errorCode: 'INTERNAL_ERROR',
            details: null,
          };

    response.status(status).json({
      statusCode: status,
      message: error.message || 'An error occurred',
      errorCode: error?.errorCode || 'INTERNAL_ERROR',
      details: error?.details || null,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
