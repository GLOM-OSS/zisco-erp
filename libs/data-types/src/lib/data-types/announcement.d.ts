import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateAnnouncementsPayload = SchemaRequestBody<
  operations,
  'AnnouncementsController_create'
>;
export type UpdateAnnouncementsPayload = SchemaRequestBody<
  operations,
  'AnnouncementsController_update'
>;

export type AnnouncementsEntity = SchemaResponseBody<
  operations,
  'AnnouncementsController_findOne'
>;
