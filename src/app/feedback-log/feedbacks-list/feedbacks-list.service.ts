import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { AppState } from '../../store';
import { Feedback, selectFeedbacks, AddFeedback } from '../../store/feedbacks';

@Injectable()
export class FeedbacksListService implements OnDestroy {
  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public addFeedback(description: string): void {
    const customerId = this.route.snapshot.params['customerId'];
    this.store.dispatch(new AddFeedback({ customerId, description }));
  }

  public getFeedbacks(): Observable<Feedback[]> {
    return this.store.pipe(
      takeWhile(() => this.isAlive),
      select(selectFeedbacks)
    );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
