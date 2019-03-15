import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customers';

@Injectable({ providedIn: 'root' })
export class ServerMockService {
  public post<T>(url: string, body: Partial<T>): Observable<string> {
    return of(`n${Math.floor(Math.random() * 100)}`);
  }

  public get<T>(url: string): Observable<T[]> {
    return of(<any>customers);
  }
}

const customers: Customer[] = [
  { id: 'c11', name: 'Casey Dalby' },
  { id: 'c12', name: 'Sandra Newberry' },
  { id: 'c13', name: 'Chin Counce' },
  { id: 'c14', name: 'Jim Higgins' },
  { id: 'c15', name: 'Liz Cranfield' }
];
