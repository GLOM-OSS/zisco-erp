import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateWarehousePayload = SchemaRequestBody<
  operations,
  'WarehouseController_create'
>;
export type UpdateWarehousePayload = SchemaRequestBody<
  operations,
  'WarehouseController_update'
>;

export type WarehouseEntity = SchemaResponseBody<
  operations,
  'WarehouseController_findOne'
>;
