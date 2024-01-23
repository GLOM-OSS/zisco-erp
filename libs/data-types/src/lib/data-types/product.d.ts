import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateProductPayload = SchemaRequestBody<
  operations,
  'ProductController_create'
>;
export type UpdateProductPayload = SchemaRequestBody<
  operations,
  'ProductController_update'
>;

export type ProductEntity = SchemaResponseBody<
  operations,
  'ProductController_findOne'
>;
