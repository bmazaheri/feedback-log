import { AppState } from '../index';
import { feedbacksAdapter } from './feedbacks.reducer';

export const selectFeedbacksState = (state: AppState) => state.feedbacks;

export const { selectAll: selectFeedbacks } = feedbacksAdapter.getSelectors(selectFeedbacksState);
