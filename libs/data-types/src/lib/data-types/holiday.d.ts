import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateHolidayPayload = SchemaRequestBody<
  operations,
  'HolidayController_create'
>;
export type UpdateHolidayPayload = SchemaRequestBody<
  operations,
  'HolidayController_update'
>;

export type HolidayEntity = SchemaResponseBody<
  operations,
  'HolidayController_findOne'
>;
