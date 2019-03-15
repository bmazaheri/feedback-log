import { ActionReducerMap } from '@ngrx/store';

import { CustomersState, customersReducer, CustomersEffects } from './customers';

export interface AppState {
  customers: CustomersState;
}

export const reducers: ActionReducerMap<AppState> = {
  customers: customersReducer
};

export const effects = [CustomersEffects];
