import { ActionReducerMap } from '@ngrx/store';

import { CustomersState, customersReducer, CustomersEffects } from './customers';
import { FeedbacksState, feedbacksReducer, FeedbacksEffects } from './feedbacks';

export interface AppState {
  customers: CustomersState;
  feedbacks: FeedbacksState;
}

export const reducers: ActionReducerMap<AppState> = {
  customers: customersReducer,
  feedbacks: feedbacksReducer
};

export const effects = [CustomersEffects, FeedbacksEffects];
