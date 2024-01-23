import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateInvoicePayload = SchemaRequestBody<
  operations,
  'InvoiceController_create'
>;
export type UpdateInvoicePayload = SchemaRequestBody<
  operations,
  'InvoiceController_update'
>;

export type InvoiceEntity = SchemaResponseBody<
  operations,
  'InvoiceController_findOne'
>;
