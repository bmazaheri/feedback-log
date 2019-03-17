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
  public isCustomerSelected$: Observable<boolean>;
  public isAddInProgress: boolean;
  public showAddForm: boolean = false;

  constructor(private service: FeedbacksListService) {}

  ngOnInit(): void {
    this.feedbacks$ = this.service.getFeedbacks();
    this.isCustomerSelected$ = this.service.getIsCustomerSelected();
    this.closeAddFormOnSelectedCustomerChange();
    this.closeAddFormOnAddSuccess();
  }

  public openAddForm(): void {
    this.showAddForm = true;
  }

  public closeAddForm(): void {
    this.showAddForm = false;
  }

  public onDescriptionEnter(description: string): void {
    this.service.addFeedback(description);
  }

  private closeAddFormOnSelectedCustomerChange(): void {
    this.service.getCustomerSelectedChange().subscribe(() => this.closeAddForm());
  }

  private closeAddFormOnAddSuccess(): void {
    this.service.getIsFeedbackAddInProgress().subscribe(isAddInProgress => {
      this.isAddInProgress = isAddInProgress;
      if (!isAddInProgress) {
        this.closeAddForm();
      }
    });
  }
}
