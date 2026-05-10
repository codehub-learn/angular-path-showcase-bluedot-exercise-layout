import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  baseUrl = "https://restcountries.com/v3.1/all?fields=name,capital,population";

  constructor(private httpClient: HttpClient){
  }

  getBugs() {
    return this.httpClient.get(this.baseUrl)
  }

  postBugs(bug: any){ // any should be replaced with domain Customer
    return this.httpClient.post(this.baseUrl, bug);
  }

  putBugs(bug: any, id: number){
    return this.httpClient.put(this.baseUrl + id, bug)
  }

  deleteBugs(id: number){
    return this.httpClient.delete(this.baseUrl + id)
  }
}
