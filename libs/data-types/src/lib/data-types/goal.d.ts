import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateGoalsPayload = SchemaRequestBody<
  operations,
  'GoalsController_create'
>;
export type UpdateGoalsPayload = SchemaRequestBody<
  operations,
  'GoalsController_update'
>;

export type GoalsEntity = SchemaResponseBody<
  operations,
  'GoalsController_findOne'
>;
