import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Customer } from './customers.models';
import { CustomersActions, CustomersActionTypes } from './customers.actions';

export interface CustomersState extends EntityState<Customer> {
  selectedCustomerId: string;
  isAddInProgress: boolean;
}

export const customersAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: CustomersState = customersAdapter.getInitialState({
  selectedCustomerId: null,
  isAddInProgress: false
});

export function customersReducer(state = initialState, action: CustomersActions): CustomersState {
  switch (action.type) {
    case CustomersActionTypes.GET_SUCCESS:
      return customersAdapter.addAll(action.payload.customers, state);

    case CustomersActionTypes.ADD:
      return { ...state, isAddInProgress: true };

    case CustomersActionTypes.ADD_SUCCESS:
      return customersAdapter.addOne(action.payload.customer, { ...state, isAddInProgress: false });

    case CustomersActionTypes.SELECT:
      return { ...state, selectedCustomerId: action.payload.id };

    case CustomersActionTypes.DESELECT:
      return { ...state, selectedCustomerId: null };

    default:
      return state;
  }
}
