import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTerminationTypesPayload = SchemaRequestBody<
  operations,
  'TerminationTypesController_create'
>;
export type UpdateTerminationTypesPayload = SchemaRequestBody<
  operations,
  'TerminationTypesController_update'
>;

export type TerminationTypesEntity = SchemaResponseBody<
  operations,
  'TerminationTypesController_findOne'
>;
