import { ApiProperty } from '@nestjs/swagger';
import { QueryableMetadataDto } from './queryable-metadata.dto';
import { IsArray, IsObject, ValidateNested } from 'class-validator';

export class QueryableResponseDto<T> {
  @ApiProperty({ type: Array })
  @IsArray()
  @ValidateNested({
    each: true,
  })
  items: T[];

  @ApiProperty({ type: QueryableMetadataDto })
  @IsObject()
  @ValidateNested({
    each: true,
  })
  meta: QueryableMetadataDto;
}
