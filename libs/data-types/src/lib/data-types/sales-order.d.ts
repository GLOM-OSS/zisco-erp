import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateSalesOrderPayload = SchemaRequestBody<
  operations,
  'SalesOrderController_create'
>;
export type UpdateSalesOrderPayload = SchemaRequestBody<
  operations,
  'SalesOrderController_update'
>;

export type SalesOrderEntity = SchemaResponseBody<
  operations,
  'SalesOrderController_findOne'
>;
