import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateStockItemPayload = SchemaRequestBody<
  operations,
  'StockItemController_create'
>;
export type UpdateStockItemPayload = SchemaRequestBody<
  operations,
  'StockItemController_update'
>;

export type StockItemEntity = SchemaResponseBody<
  operations,
  'StockItemController_findOne'
>;
