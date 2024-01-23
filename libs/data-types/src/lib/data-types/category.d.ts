import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateCategoryPayload = SchemaRequestBody<
  operations,
  'CategoryController_create'
>;
export type UpdateCategoryPayload = SchemaRequestBody<
  operations,
  'CategoryController_update'
>;

export type CategoryEntity = SchemaResponseBody<
  operations,
  'CategoryController_findOne'
>;
