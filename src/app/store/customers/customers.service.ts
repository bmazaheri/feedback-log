import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from './customers.models';
import { ServerMockService } from '../server-mock.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomersService {
  private readonly customersApiUrl = '/customers';

  constructor(private http: ServerMockService) {}

  public getCustmers(): Observable<Customer[]> {
    return this.http.get(this.customersApiUrl);
  }

  public addCustmer(name: string): Observable<Customer> {
    return this.http.post(this.customersApiUrl, { name }).pipe(map(id => ({ id, name })));
  }
}
