import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateContactPayload = SchemaRequestBody<
  operations,
  'ContactController_create'
>;
export type UpdateContactPayload = SchemaRequestBody<
  operations,
  'ContactController_update'
>;

export type ContactEntity = SchemaResponseBody<
  operations,
  'ContactController_findOne'
>;
