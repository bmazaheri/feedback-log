import { AppState } from '..';
import { customersAdapter } from './customers.reducer';
import { createSelector } from '@ngrx/store';

export const selectCustomersState = (state: AppState) => state.customers;

export const { selectAll: selectCustomers } = customersAdapter.getSelectors(selectCustomersState);

export const selectSelectedCustomerId = createSelector(
  selectCustomersState,
  state => state.selectedCustomerId
);
