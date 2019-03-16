import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store';
import { Feedback, selectFeedbacks } from '../../store/feedbacks';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'feedbacks-list',
  templateUrl: 'feedbacks-list.component.html',
  styleUrls: ['feedbacks-list.component.css']
})
export class FeedbacksListComponent implements OnInit, OnDestroy {
  public feedbacks$: Observable<Feedback[]>;

  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.feedbacks$ = this.store.pipe(
      takeWhile(() => this.isAlive),
      select(selectFeedbacks)
    );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
