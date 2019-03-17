import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServerMockService } from '../server-mock.service';
import { Feedback } from './feedbacks.models';

@Injectable({ providedIn: 'root' })
export class FeedbacksService {
  private readonly feedbacksApiUrl = '/feedbacks';

  constructor(private http: ServerMockService) {}

  public getFeedbacks(customerId: string): Observable<Feedback[]> {
    return this.http.get(this.feedbacksApiUrl, { customerId });
  }

  public addFeedback(customerId: string, description: string): Observable<Feedback> {
    return this.http
      .post(this.feedbacksApiUrl, { customerId, description })
      .pipe(map(id => ({ id, description })));
  }
}
