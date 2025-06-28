import { Module } from '@nestjs/common';
import { NestjsCommonLibService } from './nestjs-common-lib.service';
import { CustomLogger } from './logger/custom-logger.service';

@Module({
  providers: [NestjsCommonLibService, CustomLogger],
  exports: [NestjsCommonLibService],
})
export class NestjsCommonLibModule {}
