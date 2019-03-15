import { Action } from '@ngrx/store';

import { Customer } from './customers.models';

export enum CustomersActionTypes {
  GET = '[Customers] Get',
  GET_SUCCESS = '[Customers] Get Success',

  ADD = '[Customer] Add',
  ADD_SUCCESS = '[Customer] Add Success'
}

export class GetCustomers implements Action {
  readonly type = CustomersActionTypes.GET;
}

export class GetCustomersSuccess implements Action {
  readonly type = CustomersActionTypes.GET_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class AddCustomer implements Action {
  readonly type = CustomersActionTypes.ADD;

  constructor(public payload: string) {}
}

export class AddCustomerSuccess implements Action {
  readonly type = CustomersActionTypes.ADD_SUCCESS;

  constructor(public payload: Customer) {}
}

export type CustomersActions =
  | GetCustomers
  | GetCustomersSuccess
  | AddCustomer
  | AddCustomerSuccess;
