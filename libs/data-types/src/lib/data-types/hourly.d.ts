import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateHourlyPayload = SchemaRequestBody<
  operations,
  'HourlyController_create'
>;
export type UpdateHourlyPayload = SchemaRequestBody<
  operations,
  'HourlyController_update'
>;

export type HourlyEntity = SchemaResponseBody<
  operations,
  'HourlyController_findOne'
>;
