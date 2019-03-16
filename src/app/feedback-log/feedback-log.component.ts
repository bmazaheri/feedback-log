import { Component } from '@angular/core';

@Component({
  selector: 'feedback-log',
  template: `
    <router-outlet></router-outlet>
    <router-outlet name="feedbacks"></router-outlet>
  `
})
export class FeedbackLogComponent {}
