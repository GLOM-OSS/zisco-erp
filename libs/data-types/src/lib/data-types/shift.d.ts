import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateShiftPayload = SchemaRequestBody<
  operations,
  'ShiftController_create'
>;
export type UpdateShiftPayload = SchemaRequestBody<
  operations,
  'ShiftController_update'
>;

export type ShiftEntity = SchemaResponseBody<
  operations,
  'ShiftController_findOne'
>;
