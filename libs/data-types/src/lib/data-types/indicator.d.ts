import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateIndicatorsPayload = SchemaRequestBody<
  operations,
  'IndicatorsController_create'
>;
export type UpdateIndicatorsPayload = SchemaRequestBody<
  operations,
  'IndicatorsController_update'
>;

export type IndicatorsEntity = SchemaResponseBody<
  operations,
  'IndicatorsController_findOne'
>;
