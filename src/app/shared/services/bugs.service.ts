import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bug } from '../domain/bug';
import { catchError, finalize, Observable, throwError } from 'rxjs';

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

  constructor(private httpClient: HttpClient) {
  }

  getBugs(): Observable<Bug[]> {
    // boot up blocking component
    return this.httpClient.get<Bug[]>(this.baseUrl)
      .pipe(catchError(this.handleError),
        finalize(() => { // runs after success or error, good for stopping loaders/page blocks
          console.log("finalize executed...");
        }));
  }

  postBugs(bug: Bug): Observable<Bug> {
    // boot up blocking component
    return this.httpClient.post<Bug>(this.baseUrl, bug)
      .pipe(catchError(this.handleError),
        finalize(() => { // runs after success or error, good for stopping loaders/page blocks
          console.log("finalize executed...");
        }));
  }

  putBugs(bug: Bug, id: number): Observable<Bug> {
    // boot up blocking component
    return this.httpClient.put<Bug>(this.baseUrl + id, bug)
      .pipe(catchError(this.handleError),
        finalize(() => { // runs after success or error, good for stopping loaders/page blocks
          console.log("finalize executed...");
        }));
  }

  deleteBugs(id: number): Observable<void> {
    // boot up blocking component
    return this.httpClient.delete<void>(this.baseUrl + id)
      .pipe(catchError(this.handleError),
        finalize(() => { // runs after success or error, good for stopping loaders/page blocks
          console.log("finalize executed...");
        }));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error occurred during call:', error);

    if (error.status === 403) {
      // Logic: e.g., this.router.navigate(['/login']);
    } else if (error.status === 500) {
      // Logic: e.g., this.notificationService.show('Something went wrong');
    } else if (error.status === 0) {
      // Logic: e.g., this.notificationService.show('Network error occurred');
      // backend -> messaging queue -> log error
    }

    // Return an observable with a user-facing error message
    return throwError(() => error);
  }
}
