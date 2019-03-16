import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AppState } from '../../store';
import {
  GetCustomers,
  selectCustomers,
  Customer,
  SetSelectedCustomer,
  DeselectedCustomer
} from '../../store/customers';
import { takeWhile, map } from 'rxjs/operators';

@Component({
  selector: 'customers-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  public customers$: Observable<Customer[]>;

  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCustomers());
    this.customers$ = this.selectFromStore(selectCustomers);
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges(): void {
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
