import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateCompainsPayload = SchemaRequestBody<
  operations,
  'CompainsController_create'
>;
export type UpdateCompainsPayload = SchemaRequestBody<
  operations,
  'CompainsController_update'
>;

export type CompainsEntity = SchemaResponseBody<
  operations,
  'CompainsController_findOne'
>;
