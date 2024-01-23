import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateBankAccountPayload = SchemaRequestBody<
  operations,
  'BankAccountController_create'
>;
export type UpdateBankAccountPayload = SchemaRequestBody<
  operations,
  'BankAccountController_update'
>;

export type BankAccountEntity = SchemaResponseBody<
  operations,
  'BankAccountController_findOne'
>;
