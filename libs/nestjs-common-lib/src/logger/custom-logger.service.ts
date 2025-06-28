import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class CustomLogger implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    const app = process.env.APP_NAME || 'Parking Management Service';
    const { combine, timestamp, printf, colorize, align } = winston.format;
    this.logger = winston.createLogger({
      level: 'info',
      format: combine(
        colorize({ all: true }),
        timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf(
          (info) =>
            `[${info.timestamp}] ${info.level}: ${app}: ${info.message}`,
        ),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  log(message: any, context?: string) {
    this.logger.info({ message, context });
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.error({ message, trace, context });
  }

  warn(message: any, context?: string) {
    this.logger.warn({ message, context });
  }

  debug?(message: any, context?: string) {
    this.logger.debug({ message, context });
  }

  verbose?(message: any, context?: string) {
    this.logger.verbose({ message, context });
  }
}
