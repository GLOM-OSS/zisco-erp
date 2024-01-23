import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTaxPayload = SchemaRequestBody<
  operations,
  'TaxController_create'
>;
export type UpdateTaxPayload = SchemaRequestBody<
  operations,
  'TaxController_update'
>;

export type TaxEntity = SchemaResponseBody<
  operations,
  'TaxController_findOne'
>;
