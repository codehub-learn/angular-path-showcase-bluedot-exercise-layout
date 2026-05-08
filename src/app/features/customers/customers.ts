import { Component } from '@angular/core';
import { CustomerService } from '../../shared/services/customer-service';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers {
  customers: any[] = []

  constructor(private customerService: CustomerService){
    this.customerService.getCustomers().subscribe((customers: any) => {
      console.log(customers);
      this.customers = customers;
    });
  }
}
