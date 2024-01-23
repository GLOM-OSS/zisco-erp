import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateDepartmentPayload = SchemaRequestBody<
  operations,
  'DepartmentController_create'
>;
export type UpdateDepartmentPayload = SchemaRequestBody<
  operations,
  'DepartmentController_update'
>;

export type DepartmentEntity = SchemaResponseBody<
  operations,
  'DepartmentController_findOne'
>;
