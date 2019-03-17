import { createSelector } from '@ngrx/store';

import { AppState } from '../index';
import { customersAdapter } from './customers.reducer';

export const selectCustomersState = (state: AppState) => state.customers;

export const { selectAll: selectCustomers } = customersAdapter.getSelectors(selectCustomersState);

export const selectSelectedCustomerId = createSelector(
  selectCustomersState,
  state => state.selectedCustomerId
);

export const selectisCustomerAddInProgress = createSelector(
  selectCustomersState,
  state => state.isAddInProgress
);
