import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateJobsPayload = SchemaRequestBody<
  operations,
  'JobsController_create'
>;
export type UpdateJobsPayload = SchemaRequestBody<
  operations,
  'JobsController_update'
>;

export type JobsEntity = SchemaResponseBody<
  operations,
  'JobsController_findOne'
>;
