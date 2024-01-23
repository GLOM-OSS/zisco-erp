import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTransferItemPayload = SchemaRequestBody<
  operations,
  'TransferItemController_create'
>;
export type UpdateTransferItemPayload = SchemaRequestBody<
  operations,
  'TransferItemController_update'
>;

export type TransferItemEntity = SchemaResponseBody<
  operations,
  'TransferItemController_findOne'
>;
