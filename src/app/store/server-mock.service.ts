import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customers';
import { Feedback } from './feedbacks';

@Injectable({ providedIn: 'root' })
export class ServerMockService {
  public post<T>(url: string, body: Partial<T>): Observable<string> {
    return of(`n${Math.floor(Math.random() * 100)}`);
  }

  public get<T>(url: string): Observable<T[]> {
    return of(url === '/customers' ? <any>customers : <any>feedbacks);
  }
}

const customers: Customer[] = [
  { id: 'c11', name: 'Casey Dalby' },
  { id: 'c12', name: 'Sandra Newberry' },
  { id: 'c13', name: 'Chin Counce' },
  { id: 'c14', name: 'Jim Higgins' },
  { id: 'c15', name: 'Liz Cranfield' }
];

const feedbacks: Feedback[] = [
  { id: 'f11', description: 'This app is great' },
  { id: 'f12', description: 'I would like to suggest this platform to others' },
  { id: 'f13', description: "I don't think I'm willing to use it again" }
];
