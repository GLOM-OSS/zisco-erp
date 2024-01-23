import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateWarningsTypesPayload = SchemaRequestBody<
  operations,
  'WarningsTypesController_create'
>;
export type UpdateWarningsTypesPayload = SchemaRequestBody<
  operations,
  'WarningsTypesController_update'
>;

export type WarningsTypesEntity = SchemaResponseBody<
  operations,
  'WarningsTypesController_findOne'
>;
