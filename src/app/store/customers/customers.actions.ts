import { Action } from '@ngrx/store';

import { Customer } from './customers.models';

export enum CustomersActionTypes {
  GET = '[Customers] Get',
  GET_SUCCESS = '[Customers] Get Success',

  ADD = '[Customer] Add',
  ADD_SUCCESS = '[Customer] Add Success',

  SELECT = '[Customer] Select',
  DESELECT = '[Customer] Deselect'
}

export class GetCustomers implements Action {
  readonly type = CustomersActionTypes.GET;
}

export class GetCustomersSuccess implements Action {
  readonly type = CustomersActionTypes.GET_SUCCESS;

  constructor(public payload: { customers: Customer[] }) {}
}

export class AddCustomer implements Action {
  readonly type = CustomersActionTypes.ADD;

  constructor(public payload: { name: string }) {}
}

export class AddCustomerSuccess implements Action {
  readonly type = CustomersActionTypes.ADD_SUCCESS;

  constructor(public payload: { customer: Customer }) {}
}

export class SetSelectedCustomer implements Action {
  readonly type = CustomersActionTypes.SELECT;

  constructor(public payload: { id: string }) {}
}

export class DeselectedCustomer implements Action {
  readonly type = CustomersActionTypes.DESELECT;
}

export type CustomersActions =
  | GetCustomers
  | GetCustomersSuccess
  | AddCustomer
  | AddCustomerSuccess
  | SetSelectedCustomer
  | DeselectedCustomer;
