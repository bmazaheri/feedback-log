import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../../store/customers';
import { CustomersListService } from './customers-list.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers: [CustomersListService]
})
export class CustomersListComponent implements OnInit {
  public customers$: Observable<Customer[]>;
  public selectedCustomerId: string;
  public isAdding = false;

  constructor(private customersListService: CustomersListService) {}

  ngOnInit(): void {
    this.customersListService.subscribeToRouteChanges();
    this.customersListService.loadCustomers();
    this.customers$ = this.customersListService.getCustomers();
    this.customersListService
      .getSelectedCustomerId()
      .subscribe(id => (this.selectedCustomerId = id));
  }

  public openAddForm(): void {
    this.isAdding = true;
  }

  public closeAddForm(): void {
    this.isAdding = false;
  }

  public onNameEnter(name: string): void {
    this.customersListService.addCustomer(name);
    this.closeAddForm();
  }
}
