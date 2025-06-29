import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsNumber } from 'class-validator';

export class QueryableMetadataDto {
  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsNumber()
  total: number;

  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsNumber()
  page: number;

  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsNumber()
  limit: number;

  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsNumber()
  totalPages: number;
}
