import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Customer } from './customers.models';
import { CustomersActions, CustomersActionTypes } from './customers.actions';

export interface CustomersState extends EntityState<Customer> {}

export const customersAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: CustomersState = customersAdapter.getInitialState();

export function customersReducer(state = initialState, action: CustomersActions): CustomersState {
  switch (action.type) {
    case CustomersActionTypes.GET_SUCCESS:
      return customersAdapter.addAll(action.payload, state);

    case CustomersActionTypes.ADD_SUCCESS:
      return customersAdapter.addOne(action.payload, state);

    default:
      return state;
  }
}
