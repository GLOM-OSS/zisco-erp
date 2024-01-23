import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateArticlesPayload = SchemaRequestBody<
  operations,
  'ArticlesController_create'
>;
export type UpdateArticlesPayload = SchemaRequestBody<
  operations,
  'ArticlesController_update'
>;

export type ArticlesEntity = SchemaResponseBody<
  operations,
  'ArticlesController_findOne'
>;
