import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customers';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServerMockService {
  public post<T>(url: string, body: Partial<T>): Observable<string> {
    return of(`n${Math.floor(Math.random() * 100)}`).pipe(delay(3000));
  }

  public get<T>(url: string, body?: any): Observable<T[]> {
    return of(url === '/customers' ? this.getCustomers() : this.getFeedbacks(body.customerId));
  }

  private getCustomers(): any[] {
    return customers;
  }

  private getFeedbacks(customerId: string): any[] {
    return feedbacks.filter(feedback => feedback.customerId === customerId);
  }
}

const customers: Customer[] = [
  { id: 'c11', name: 'Casey Dalby' },
  { id: 'c12', name: 'Sandra Newberry' },
  { id: 'c13', name: 'Chin Counce' },
  { id: 'c14', name: 'Jim Higgins' },
  { id: 'c15', name: 'Liz Cranfield' }
];

const feedbacks: any[] = [
  { id: 'f11', customerId: 'c11', description: 'This app is great' },
  { id: 'f12', customerId: 'c11', description: 'I would like to suggest this platform to others' },
  { id: 'f13', customerId: 'c11', description: "I don't think I'm willing to use it again" },
  {
    id: 'f14',
    customerId: 'c11',
    description:
      'This is gonna be a long long feedback so get ready for it! I might start from talking about how i heard about this platform'
  },
  { id: 'f15', customerId: 'c12', description: "I don't understand \\_O_/" },
  { id: 'f16', customerId: 'c13', description: 'How great is this app' },
  {
    id: 'f17',
    customerId: 'c13',
    description: 'We are going to use it more but some details should be improved'
  },
  { id: 'f17', customerId: 'c14', description: 'Do u also have a mobile application?' },
  { id: 'f18', customerId: 'c14', description: 'How can i reset my password?' },
  { id: 'f19', customerId: 'c14', description: 'Can I have to users at the same time?' },
  { id: 'f20', customerId: 'c14', description: 'How can I search between my feedbacks?' },
  { id: 'f21', customerId: 'c14', description: 'I need to sort my feedbacks' }
];
