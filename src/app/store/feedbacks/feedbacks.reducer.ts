import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Feedback } from './feedbacks.models';
import { FeedbacksActions, FeedbacksActionTypes } from './feedbacks.actions';

export interface FeedbacksState extends EntityState<Feedback> {
  isAddInProgress: boolean;
}

export const feedbacksAdapter: EntityAdapter<Feedback> = createEntityAdapter<Feedback>();

export const initialState: FeedbacksState = feedbacksAdapter.getInitialState({
  isAddInProgress: false
});

export function feedbacksReducer(state = initialState, action: FeedbacksActions): FeedbacksState {
  switch (action.type) {
    case FeedbacksActionTypes.GET_SUCCESS:
      return feedbacksAdapter.addAll(action.payload.feedbacks, state);

    case FeedbacksActionTypes.ADD:
      return { ...state, isAddInProgress: true };

    case FeedbacksActionTypes.ADD_SUCCESS:
      return feedbacksAdapter.addOne(action.payload.feedback, { ...state, isAddInProgress: false });

    default:
      return state;
  }
}
