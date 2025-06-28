import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateByIdDto<T> {
  @ApiProperty({ type: 'string' })
  @IsString()
  id: string;

  @ApiProperty({ type: Object })
  @IsOptional()
  data: T;
}
