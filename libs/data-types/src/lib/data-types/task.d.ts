import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTasksPayload = SchemaRequestBody<
  operations,
  'TasksController_create'
>;
export type UpdateTasksPayload = SchemaRequestBody<
  operations,
  'TasksController_update'
>;

export type TasksEntity = SchemaResponseBody<
  operations,
  'TasksController_findOne'
>;
