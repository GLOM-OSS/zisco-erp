import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateAssignStockPayload = SchemaRequestBody<
  operations,
  'AssignStockController_create'
>;
export type UpdateAssignStockPayload = SchemaRequestBody<
  operations,
  'AssignStockController_update'
>;

export type AssignStockEntity = SchemaResponseBody<
  operations,
  'AssignStockController_findOne'
>;
