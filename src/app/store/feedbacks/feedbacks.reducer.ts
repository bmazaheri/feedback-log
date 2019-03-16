import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Feedback } from './feedbacks.models';
import { FeedbacksActions, FeedbacksActionTypes } from './feedbacks.actions';

export interface FeedbacksState extends EntityState<Feedback> {}

export const feedbacksAdapter: EntityAdapter<Feedback> = createEntityAdapter<Feedback>();

export const initialState: FeedbacksState = feedbacksAdapter.getInitialState();

export function feedbacksReducer(state = initialState, action: FeedbacksActions): FeedbacksState {
  switch (action.type) {
    case FeedbacksActionTypes.GET_SUCCESS:
      return feedbacksAdapter.addAll(action.payload.feedbacks, state);

    case FeedbacksActionTypes.ADD_SUCCESS:
      return feedbacksAdapter.addOne(action.payload.feedback, state);

    default:
      return state;
  }
}
