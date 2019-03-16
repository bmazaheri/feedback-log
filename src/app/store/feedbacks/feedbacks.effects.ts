import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import {
  FeedbacksActionTypes,
  GetFeedbacks,
  GetFeedbacksSuccess,
  AddFeedback,
  AddFeedbackSuccess
} from './feedbacks.actions';
import { FeedbacksService } from './feedbacks.service';

@Injectable()
export class FeedbacksEffects {
  @Effect()
  loadFeedbacks$ = this.actions$.pipe(
    ofType(FeedbacksActionTypes.GET),
    mergeMap((action: GetFeedbacks) =>
      this.feedbacksService.getFeedbacks(action.payload.customerId).pipe(
        map(feedbacks => new GetFeedbacksSuccess({ feedbacks })),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  addFeedback$ = this.actions$.pipe(
    ofType(FeedbacksActionTypes.ADD),
    mergeMap((action: AddFeedback) =>
      this.feedbacksService.addFeedback(action.payload.description).pipe(
        map(feedback => new AddFeedbackSuccess({ feedback })),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions, private feedbacksService: FeedbacksService) {}
}
