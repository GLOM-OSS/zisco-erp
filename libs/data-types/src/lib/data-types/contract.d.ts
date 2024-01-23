import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateContractPayload = SchemaRequestBody<
  operations,
  'ContractController_create'
>;
export type UpdateContractPayload = SchemaRequestBody<
  operations,
  'ContractController_update'
>;

export type ContractEntity = SchemaResponseBody<
  operations,
  'ContractController_findOne'
>;
