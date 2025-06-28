import { ApiBody, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
import { QueryableResponseDto } from '../dto/queryable-response.dto';
import { applyDecorators, Type } from '@nestjs/common';
import { NetworkRequestDto } from '../dto/network-request';

export function NetworkRequestHelper<TModel extends Type<unknown>>(
  model: TModel,
) {
  return applyDecorators(
    ApiExtraModels(QueryableResponseDto, model),
    ApiBody({
      schema: {
        allOf: [{ $ref: getSchemaPath(NetworkRequestDto) }],
        properties: {
          page: {
            type: 'number',
            default: 1,
          },
          limit: {
            type: 'number',
            default: 10,
          },
          sortBy: {
            type: 'string',
            default: 'createdAt',
          },
          sortOrder: {
            type: 'string',
            enum: ['asc', 'desc'],
            default: 'asc',
          },
          filters: {
            $ref: getSchemaPath(model),
          },
        },
      },
    }),
  );
}
