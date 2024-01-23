import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateResignationPayload = SchemaRequestBody<
  operations,
  'ResignationController_create'
>;
export type UpdateResignationPayload = SchemaRequestBody<
  operations,
  'ResignationController_update'
>;

export type ResignationEntity = SchemaResponseBody<
  operations,
  'ResignationController_findOne'
>;
