import { DynamicModule, Module } from '@nestjs/common';
import { CustomLogger } from './logger/custom-logger.service';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class NestjsCommonModule {
  static register(options: { appName: string }): DynamicModule {
    return {
      module: NestjsCommonModule,
      providers: [
        {
          provide: 'APP_NAME',
          useValue: options.appName,
        },
      ],
      exports: ['APP_NAME'],
    };
  }
}
