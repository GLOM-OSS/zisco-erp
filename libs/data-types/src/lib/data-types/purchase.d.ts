import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreatePurchasePayload = SchemaRequestBody<
  operations,
  'PurchaseController_create'
>;
export type UpdatePurchasePayload = SchemaRequestBody<
  operations,
  'PurchaseController_update'
>;

export type PurchaseEntity = SchemaResponseBody<
  operations,
  'PurchaseController_findOne'
>;
