import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile, map, distinctUntilChanged, mapTo } from 'rxjs/operators';

import { AppState } from '../../store';
import {
  Feedback,
  selectFeedbacks,
  AddFeedback,
  selectisFeedbackAddInProgress
} from '../../store/feedbacks';
import { selectSelectedCustomerId } from '../../store/customers';

@Injectable()
export class FeedbacksListService implements OnDestroy {
  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public getIsFeedbackAddInProgress(): Observable<boolean> {
    return this.selectFromStore(selectisFeedbackAddInProgress);
  }

  public getCustomerSelectedChange(): Observable<void> {
    return this.selectFromStore(selectSelectedCustomerId).pipe(
      distinctUntilChanged(),
      mapTo(null)
    );
  }

  public addFeedback(description: string): void {
    const customerId = this.route.snapshot.params['customerId'];
    this.store.dispatch(new AddFeedback({ customerId, description }));
  }

  public getFeedbacks(): Observable<Feedback[]> {
    return this.selectFromStore(selectFeedbacks);
  }

  public getIsCustomerSelected(): Observable<boolean> {
    return this.selectFromStore(selectSelectedCustomerId).pipe(
      map(customerId => Boolean(customerId))
    );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  private selectFromStore<T>(selectorFn: (state: AppState) => T): Observable<T> {
    return this.store.pipe(
      takeWhile(() => this.isAlive),
      select(selectorFn)
    );
  }
}
