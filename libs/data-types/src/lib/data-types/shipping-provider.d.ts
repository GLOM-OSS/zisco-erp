import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateShippingProviderPayload = SchemaRequestBody<
  operations,
  'ShippingProviderController_create'
>;
export type UpdateShippingProviderPayload = SchemaRequestBody<
  operations,
  'ShippingProviderController_update'
>;

export type ShippingProviderEntity = SchemaResponseBody<
  operations,
  'ShippingProviderController_findOne'
>;
