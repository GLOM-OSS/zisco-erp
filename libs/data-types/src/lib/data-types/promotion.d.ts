import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreatePromotionPayload = SchemaRequestBody<
  operations,
  'PromotionController_create'
>;
export type UpdatePromotionPayload = SchemaRequestBody<
  operations,
  'PromotionController_update'
>;

export type PromotionEntity = SchemaResponseBody<
  operations,
  'PromotionController_findOne'
>;
