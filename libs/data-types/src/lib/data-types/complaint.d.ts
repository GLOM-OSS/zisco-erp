import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateComplaintsPayload = SchemaRequestBody<
  operations,
  'ComplaintsController_create'
>;
export type UpdateComplaintsPayload = SchemaRequestBody<
  operations,
  'ComplaintsController_update'
>;

export type ComplaintsEntity = SchemaResponseBody<
  operations,
  'ComplaintsController_findOne'
>;
