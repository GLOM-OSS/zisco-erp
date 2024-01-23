import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateProjectPayload = SchemaRequestBody<
  operations,
  'ProjectsController_create'
>;

export type UpdateProjectPayload = SchemaRequestBody<
  operations,
  'ProjectsController_update'
>;

export type ProjectEntity = SchemaResponseBody<
  operations,
  'ProjectsController_findOne'
>;
