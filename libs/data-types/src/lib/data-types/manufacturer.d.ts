import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateManufacturerPayload = SchemaRequestBody<
  operations,
  'ManufacturerController_create'
>;
export type UpdateManufacturerPayload = SchemaRequestBody<
  operations,
  'ManufacturerController_update'
>;

export type ManufacturerEntity = SchemaResponseBody<
  operations,
  'ManufacturerController_findOne'
>;
