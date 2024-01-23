import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTicketsPayload = SchemaRequestBody<
  operations,
  'TicketsController_create'
>;
export type UpdateTicketsPayload = SchemaRequestBody<
  operations,
  'TicketsController_update'
>;

export type TicketsEntity = SchemaResponseBody<
  operations,
  'TicketsController_findOne'
>;
