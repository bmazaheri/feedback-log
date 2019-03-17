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
  public isAddInProgress: boolean;
  public showAddForm: boolean = false;

  constructor(private service: CustomersListService) {}

  ngOnInit(): void {
    this.service.subscribeToRouteChanges();
    this.service.loadCustomers();
    this.customers$ = this.service.getCustomers();
    this.service.getSelectedCustomerId().subscribe(id => (this.selectedCustomerId = id));
    this.closeAddFormOnAddSuccess();
  }

  public openAddForm(): void {
    this.showAddForm = true;
  }

  public closeAddForm(): void {
    this.showAddForm = false;
  }

  public onNameEnter(name: string): void {
    this.service.addCustomer(name);
  }

  private closeAddFormOnAddSuccess(): void {
    this.service.getIsCustomerAddInProgress().subscribe(isAddInProgress => {
      this.isAddInProgress = isAddInProgress;
      if (!isAddInProgress) {
        this.closeAddForm();
      }
    });
  }
}
