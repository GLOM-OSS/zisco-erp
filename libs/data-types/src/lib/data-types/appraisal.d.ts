import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateAppraisalPayload = SchemaRequestBody<
  operations,
  'AppraisalController_create'
>;
export type UpdateAppraisalPayload = SchemaRequestBody<
  operations,
  'AppraisalController_update'
>;

export type AppraisalEntity = SchemaResponseBody<
  operations,
  'AppraisalController_findOne'
>;
