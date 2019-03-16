import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  CustomersActionTypes,
  GetCustomersSuccess,
  AddCustomer,
  AddCustomerSuccess
} from './customers.actions';
import { CustomersService } from './customers.service';
import { EMPTY } from 'rxjs';

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

  constructor(private actions$: Actions, private customersService: CustomersService) {}
}
