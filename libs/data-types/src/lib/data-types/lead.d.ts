import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateLeadsPayload = SchemaRequestBody<
  operations,
  'LeadsController_create'
>;
export type UpdateLeadsPayload = SchemaRequestBody<
  operations,
  'LeadsController_update'
>;

export type LeadsEntity = SchemaResponseBody<
  operations,
  'LeadsController_findOne'
>;
