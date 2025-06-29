import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsPositive, IsOptional, IsString, IsEnum } from 'class-validator';
import { SortOrder } from '../enums/sort-order.enum';

export class NetworkRequestDto<TModel> {
  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsOptional()
  page?: number;

  @ApiProperty({ type: 'number' })
  @IsPositive()
  @IsOptional()
  limit?: number;

  @ApiProperty({ type: 'string' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({
    enum: SortOrder,
    description: 'Sort order: asc or desc',
  })
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;

  @IsOptional()
  @ApiProperty({ type: Object })
  filters: TModel;
}
