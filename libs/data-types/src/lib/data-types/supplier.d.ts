import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateSupplierPayload = SchemaRequestBody<
  operations,
  'SupplierController_create'
>;
export type UpdateSupplierPayload = SchemaRequestBody<
  operations,
  'SupplierController_update'
>;

export type SupplierEntity = SchemaResponseBody<
  operations,
  'SupplierController_findOne'
>;
