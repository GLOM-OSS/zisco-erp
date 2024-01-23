import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateAttendancePayload = SchemaRequestBody<
  operations,
  'AttendanceController_create'
>;
export type UpdateAttendancePayload = SchemaRequestBody<
  operations,
  'AttendanceController_update'
>;

export type AttendanceEntity = SchemaResponseBody<
  operations,
  'AttendanceController_findOne'
>;
