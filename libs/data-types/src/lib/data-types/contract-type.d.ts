import { SchemaRequestBody, SchemaResponseBody } from '../api.helper';
import { operations } from '../docs';

export type CreateContractTypesPayload = SchemaRequestBody<
  operations,
  'ContractTypesController_create'
>;
export type UpdateContractTypesPayload = SchemaRequestBody<
  operations,
  'ContractTypesController_update'
>;

export type ContractTypesEntity = SchemaResponseBody<
  operations,
  'ContractTypesController_findOne'
>;
