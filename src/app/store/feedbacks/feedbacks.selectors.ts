import { createSelector } from '@ngrx/store';

import { AppState } from '../index';
import { feedbacksAdapter } from './feedbacks.reducer';

export const selectFeedbacksState = (state: AppState) => state.feedbacks;

export const { selectAll: selectFeedbacks } = feedbacksAdapter.getSelectors(selectFeedbacksState);

export const selectisFeedbackAddInProgress = createSelector(
  selectFeedbacksState,
  state => state.isAddInProgress
);
