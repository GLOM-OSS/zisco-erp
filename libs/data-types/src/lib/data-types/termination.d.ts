import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTerminationPayload = SchemaRequestBody<
  operations,
  'TerminationController_create'
>;
export type UpdateTerminationPayload = SchemaRequestBody<
  operations,
  'TerminationController_update'
>;

export type TerminationEntity = SchemaResponseBody<
  operations,
  'TerminationController_findOne'
>;
