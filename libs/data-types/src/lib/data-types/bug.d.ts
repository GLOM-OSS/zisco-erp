import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateBugsPayload = SchemaRequestBody<
  operations,
  'BugsController_create'
>;
export type UpdateBugsPayload = SchemaRequestBody<
  operations,
  'BugsController_update'
>;

export type BugsEntity = SchemaResponseBody<
  operations,
  'BugsController_findOne'
>;
