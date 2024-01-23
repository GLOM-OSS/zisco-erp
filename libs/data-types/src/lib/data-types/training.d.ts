import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateTrainingPayload = SchemaRequestBody<
  operations,
  'TrainingController_create'
>;
export type UpdateTrainingPayload = SchemaRequestBody<
  operations,
  'TrainingController_update'
>;

export type TrainingEntity = SchemaResponseBody<
  operations,
  'TrainingController_findOne'
>;
