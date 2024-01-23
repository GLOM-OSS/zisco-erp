import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTimeChangeRequestPayload = SchemaRequestBody<
  operations,
  'TimeChangeRequestController_create'
>;
export type UpdateTimeChangeRequestPayload = SchemaRequestBody<
  operations,
  'TimeChangeRequestController_update'
>;

export type TimeChangeRequestEntity = SchemaResponseBody<
  operations,
  'TimeChangeRequestController_findOne'
>;
