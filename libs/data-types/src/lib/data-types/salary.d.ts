import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateSalaryPayload = SchemaRequestBody<
  operations,
  'SalaryController_create'
>;
export type UpdateSalaryPayload = SchemaRequestBody<
  operations,
  'SalaryController_update'
>;

export type SalaryEntity = SchemaResponseBody<
  operations,
  'SalaryController_findOne'
>;
