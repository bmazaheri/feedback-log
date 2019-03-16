import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ServerMockService } from '../server-mock.service';
import { map } from 'rxjs/operators';
import { Feedback } from './feedbacks.models';

@Injectable({ providedIn: 'root' })
export class FeedbacksService {
  private readonly feedbacksApiUrl = '/feedbacks';

  constructor(private http: ServerMockService) {}

  public getFeedbacks(customerId: string): Observable<Feedback[]> {
    return this.http.get(this.feedbacksApiUrl);
  }

  public addFeedback(customerId: string, description: string): Observable<Feedback> {
    return this.http
      .post(this.feedbacksApiUrl, { customerId, description })
      .pipe(map(id => ({ id, description })));
  }
}
