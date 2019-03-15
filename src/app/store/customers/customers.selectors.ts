import { AppState } from '..';
import { customersAdapter } from './customers.reducer';

export const selectCustomersState = (state: AppState) => state.customers;

export const { selectAll: selectCustomers } = customersAdapter.getSelectors(selectCustomersState);
