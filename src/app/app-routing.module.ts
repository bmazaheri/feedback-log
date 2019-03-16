import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackLogModule } from './feedback-log/feedback-log.module';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    path: 'customers',
    loadChildren: () => FeedbackLogModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
