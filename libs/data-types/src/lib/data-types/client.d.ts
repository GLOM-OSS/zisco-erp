import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateClientsPayload = SchemaRequestBody<
  operations,
  'ClientsController_create'
>;
export type UpdateClientsPayload = SchemaRequestBody<
  operations,
  'ClientsController_update'
>;

export type ClientsEntity = SchemaResponseBody<
  operations,
  'ClientsController_findOne'
>;
