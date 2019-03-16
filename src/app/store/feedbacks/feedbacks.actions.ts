import { Action } from '@ngrx/store';

import { Feedback } from './feedbacks.models';

export enum FeedbacksActionTypes {
  GET = '[Feedbacks] Get',
  GET_SUCCESS = '[Feedbacks] Get Success',

  ADD = '[Feedback] Add',
  ADD_SUCCESS = '[Feedback] Add Success'
}

export class GetFeedbacks implements Action {
  readonly type = FeedbacksActionTypes.GET;

  constructor(public payload: { customerId: string }) {}
}

export class GetFeedbacksSuccess implements Action {
  readonly type = FeedbacksActionTypes.GET_SUCCESS;

  constructor(public payload: { feedbacks: Feedback[] }) {}
}

export class AddFeedback implements Action {
  readonly type = FeedbacksActionTypes.ADD;

  constructor(public payload: { customerId: string; description: string }) {}
}

export class AddFeedbackSuccess implements Action {
  readonly type = FeedbacksActionTypes.ADD_SUCCESS;

  constructor(public payload: { feedback: Feedback }) {}
}

export type FeedbacksActions =
  | GetFeedbacks
  | GetFeedbacksSuccess
  | AddFeedback
  | AddFeedbackSuccess;
