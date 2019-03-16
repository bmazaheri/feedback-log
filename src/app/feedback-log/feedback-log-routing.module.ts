import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers-list/customers.component';
import { FeedbackLogComponent } from './feedback-log.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackLogComponent,
    children: [
      { path: '', component: CustomersComponent },
      {
        path: ':customerId',
        component: CustomersComponent,
        children: [{ path: '', component: FeedbacksListComponent, outlet: 'feedbacks' }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackLogRoutingModule {}
