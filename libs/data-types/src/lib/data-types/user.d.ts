import { SchemaRequestBody } from '../api.helper';
import { operations } from '../docs';

export type SignUpPayload = SchemaRequestBody<
  operations,
  'UsersController_createUser'
>;
export type SignInPayload = SchemaRequestBody<
  operations,
  'UsersController_validateUser'
>;
