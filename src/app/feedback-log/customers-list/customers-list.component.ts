import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../../store/customers';
import { CustomersListService } from './customers-list.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  providers: [CustomersListService]
})
export class CustomersListComponent implements OnInit {
  @ViewChild('newName')
  newNameInput: ElementRef;

  public customers$: Observable<Customer[]>;
  public selectedCustomerId: string;
  public isAddInProgress: boolean;
  public showAddForm: boolean = false;

  constructor(private service: CustomersListService) {}

  ngOnInit(): void {
    this.service.subscribeToRouteChanges();
    this.customers$ = this.service.getCustomers();
    this.service.getSelectedCustomerId().subscribe(id => (this.selectedCustomerId = id));
    this.closeAddFormOnAddSuccess();
  }

  public openAddForm(): void {
    this.newNameInput.nativeElement.value = '';
    this.showAddForm = true;
    this.focusOnInput();
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

  private focusOnInput(): void {
    setTimeout(() => this.newNameInput.nativeElement.focus());
  }
}
