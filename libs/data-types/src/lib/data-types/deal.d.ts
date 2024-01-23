import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateDealsPayload = SchemaRequestBody<
  operations,
  'DealsController_create'
>;
export type UpdateDealsPayload = SchemaRequestBody<
  operations,
  'DealsController_update'
>;

export type DealsEntity = SchemaResponseBody<
  operations,
  'DealsController_findOne'
>;
