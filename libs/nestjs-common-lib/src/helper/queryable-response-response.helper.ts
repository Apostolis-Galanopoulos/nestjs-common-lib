import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { QueryableResponseDto } from '../dto/queryable-response.dto';
import { applyDecorators, Type } from '@nestjs/common';

export function QueryableResponseHelper<TModel extends Type<unknown>>(
  model: TModel,
) {
  return applyDecorators(
    ApiExtraModels(QueryableResponseDto, model),
    ApiOkResponse({
      schema: {
        allOf: [{ $ref: getSchemaPath(QueryableResponseDto) }],
        properties: {
          items: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
          },
          meta: {
            type: 'object',
            properties: {
              total: { type: 'number' },
              page: { type: 'number' },
              limit: { type: 'number' },
              totalPages: { type: 'number' },
            },
          },
        },
      },
    }),
  );
}
