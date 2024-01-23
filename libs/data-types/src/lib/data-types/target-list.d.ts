import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTargetListPayload = SchemaRequestBody<
  operations,
  'TargetListController_create'
>;
export type UpdateTargetListPayload = SchemaRequestBody<
  operations,
  'TargetListController_update'
>;

export type TargetListEntity = SchemaResponseBody<
  operations,
  'TargetListController_findOne'
>;
