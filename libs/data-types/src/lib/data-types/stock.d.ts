import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateStockPayload = SchemaRequestBody<
  operations,
  'StockController_create'
>;
export type UpdateStockPayload = SchemaRequestBody<
  operations,
  'StockController_update'
>;

export type StockEntity = SchemaResponseBody<
  operations,
  'StockController_findOne'
>;
