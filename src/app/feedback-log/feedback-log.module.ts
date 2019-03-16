import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { FeedbackLogRoutingModule } from './feedback-log-routing.module';
import { FeedbackLogComponent } from './feedback-log.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { TextShortViewPipe } from './feedbacks-list/text-short-view.pipe';

@NgModule({
  imports: [CommonModule, FeedbackLogRoutingModule],
  declarations: [
    CustomersListComponent,
    FeedbackLogComponent,
    FeedbacksListComponent,
    TextShortViewPipe
  ]
})
export class FeedbackLogModule {}
