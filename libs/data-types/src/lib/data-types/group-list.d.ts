import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateGrouplistPayload = SchemaRequestBody<
  operations,
  'GrouplistController_create'
>;
export type UpdateGrouplistPayload = SchemaRequestBody<
  operations,
  'GrouplistController_update'
>;

export type GrouplistEntity = SchemaResponseBody<
  operations,
  'GrouplistController_findOne'
>;
