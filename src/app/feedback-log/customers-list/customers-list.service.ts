import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

import { AppState } from '../../store';
import {
  GetCustomers,
  SetSelectedCustomer,
  DeselectedCustomer,
  Customer,
  selectCustomers,
  selectSelectedCustomerId,
  AddCustomer,
  selectisCustomerAddInProgress
} from '../../store/customers';

@Injectable()
export class CustomersListService implements OnDestroy {
  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public getIsCustomerAddInProgress(): Observable<boolean> {
    return this.selectFromStore(selectisCustomerAddInProgress);
  }

  public addCustomer(name: string): void {
    this.store.dispatch(new AddCustomer({ name }));
  }

  public loadCustomers(): void {
    this.store.dispatch(new GetCustomers());
  }

  public getCustomers(): Observable<Customer[]> {
    return this.selectFromStore(selectCustomers);
  }

  public getSelectedCustomerId(): Observable<string> {
    return this.selectFromStore(selectSelectedCustomerId);
  }

  public subscribeToRouteChanges(): void {
    this.route.params
      .pipe(
        takeWhile(() => this.isAlive),
        map(params => params['customerId'])
      )
      .subscribe(id => {
        this.store.dispatch(id ? new SetSelectedCustomer({ id }) : new DeselectedCustomer());
      });
  }

  private selectFromStore<T>(selectorFn: (state: AppState) => T): Observable<T> {
    return this.store.pipe(
      takeWhile(() => this.isAlive),
      select(selectorFn)
    );
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
