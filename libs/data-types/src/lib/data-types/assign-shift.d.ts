import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';


export type CreateAssignShiftPayload = SchemaRequestBody<
  operations,
  'AssignShiftController_create'
>;

export type UpdateAssignShiftPayload = SchemaRequestBody<
  operations,
  'AssignShiftController_update'
>;

export type ShiftEntity = SchemaResponseBody<
  operations,
  'AssignShiftController_findOne'
>;