import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { FeedbackLogComponent } from './feedback-log.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackLogComponent,
    children: [
      { path: '', component: CustomersListComponent },
      {
        path: ':customerId',
        children: [
          { path: '', component: CustomersListComponent },
          { path: '', component: FeedbacksListComponent, outlet: 'feedbacks' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackLogRoutingModule {}
