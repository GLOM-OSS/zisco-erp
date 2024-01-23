import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateOpportunitiesPayload = SchemaRequestBody<
  operations,
  'OpportunitiesController_create'
>;
export type UpdateOpportunitiesPayload = SchemaRequestBody<
  operations,
  'OpportunitiesController_update'
>;

export type OpportunitiesEntity = SchemaResponseBody<
  operations,
  'OpportunitiesController_findOne'
>;
