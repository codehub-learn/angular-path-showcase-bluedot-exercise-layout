import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = "https://restcountries.com/v3.1/all?fields=name,capital,population";

  constructor(private httpClient: HttpClient){
  }

  getCustomers() {
    return this.httpClient.get(this.baseUrl)
  }

  postCustomer(customer: any){ // any should be replaced with domain Customer
    return this.httpClient.post(this.baseUrl, customer);
  }

  putCustomer(customer: any, id: number){
    return this.httpClient.put(this.baseUrl + id, customer)
  }

  deleteCustomer(id: number){
    return this.httpClient.delete(this.baseUrl + id)
  }
}
