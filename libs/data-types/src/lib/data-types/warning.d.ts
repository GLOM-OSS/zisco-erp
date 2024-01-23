import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateWarningsPayload = SchemaRequestBody<
  operations,
  'WarningsController_create'
>;
export type UpdateWarningsPayload = SchemaRequestBody<
  operations,
  'WarningsController_update'
>;

export type WarningsEntity = SchemaResponseBody<
  operations,
  'WarningsController_findOne'
>;
