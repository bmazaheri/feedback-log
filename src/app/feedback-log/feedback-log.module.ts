import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers-list/customers.component';
import { FeedbackLogRoutingModule } from './feedback-log-routing.module';
import { FeedbackLogComponent } from './feedback-log.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';

@NgModule({
  imports: [CommonModule, FeedbackLogRoutingModule],
  declarations: [CustomersComponent, FeedbackLogComponent,FeedbacksListComponent]
})
export class FeedbackLogModule {}
