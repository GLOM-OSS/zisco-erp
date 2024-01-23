import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateQuotesPayload = SchemaRequestBody<
  operations,
  'QuotesController_create'
>;
export type UpdateQuotesPayload = SchemaRequestBody<
  operations,
  'QuotesController_update'
>;

export type QuotesEntity = SchemaResponseBody<
  operations,
  'QuotesController_findOne'
>;
