import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  baseUrl = "http://localhost:3000/bugs";

  /*
  {
    "title": "Login button is unresponsive on mobile",
    "description": "When viewing the site on screens smaller than 400px, the login button gets covered by the footer.",
    "priority": 1,
    "reporter": "QA",
    "status": "Ready for testing",
    "comments": [
      "Tested on an iPhone 13.",
      "Can reproduce 100% of the time."
    ]
  }
  * */

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
