import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Feedback } from '../../store/feedbacks';
import { FeedbacksListService } from './feedbacks-list.service';

@Component({
  selector: 'feedbacks-list',
  templateUrl: 'feedbacks-list.component.html',
  styleUrls: ['feedbacks-list.component.css'],
  providers: [FeedbacksListService]
})
export class FeedbacksListComponent implements OnInit {
  public feedbacks$: Observable<Feedback[]>;
  public isAdding = false;

  constructor(private feedbacksListService: FeedbacksListService) {}

  ngOnInit(): void {
    this.feedbacks$ = this.feedbacksListService.getFeedbacks();
  }

  public openAddForm(): void {
    this.isAdding = true;
  }

  public closeAddForm(): void {
    this.isAdding = false;
  }

  public onDescriptionEnter(description: string): void {
    this.feedbacksListService.addFeedback(description);
    this.closeAddForm();
  }
}
