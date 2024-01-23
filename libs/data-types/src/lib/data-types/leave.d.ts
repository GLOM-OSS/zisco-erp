import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateLeavePayload = SchemaRequestBody<
  operations,
  'LeaveController_create'
>;
export type UpdateLeavePayload = SchemaRequestBody<
  operations,
  'LeaveController_update'
>;

export type LeaveEntity = SchemaResponseBody<
  operations,
  'LeaveController_findOne'
>;
