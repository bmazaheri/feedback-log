import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  CustomersActionTypes,
  GetCustomersSuccess,
  AddCustomer,
  AddCustomerSuccess,
  SetSelectedCustomer
} from './customers.actions';
import { CustomersService } from './customers.service';
import { EMPTY } from 'rxjs';
import { GetFeedbacks } from '../feedbacks';

@Injectable()
export class CustomersEffects {
  @Effect()
  loadCustomers$ = this.actions$.pipe(
    ofType(CustomersActionTypes.GET),
    mergeMap(() =>
      this.customersService.getCustmers().pipe(
        map(customers => new GetCustomersSuccess({ customers })),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  addCustomer$ = this.actions$.pipe(
    ofType(CustomersActionTypes.ADD),
    mergeMap((action: AddCustomer) =>
      this.customersService.addCustmer(action.payload.name).pipe(
        map(customer => new AddCustomerSuccess({ customer })),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  selectCustomer$ = this.actions$.pipe(
    ofType(CustomersActionTypes.SELECT),
    map((action: SetSelectedCustomer) => new GetFeedbacks({ customerId: action.payload.id }))
  );

  constructor(private actions$: Actions, private customersService: CustomersService) {}
}
