import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // singleton
})
export class UserService {
  constructor(private httpClient: HttpClient) {
    console.log("hello from user service");
  }

  getUsers(): Observable<User[]> {
    return of([
      {
        "id": 1,
        "fullname": "Alex Rivers",
        "email": "alex.rivers@example.com"
      },
      {
        "id": 2,
        "fullname": "Sam T. Jenkins",
        "email": "s.jenkins@provider.net"
      },
      {
        "id": 3,
        "fullname": "Elena Rodriguez",
        "email": "erodriguez@company.org"
      },
      {
        "id": 4,
        "fullname": "Jordan Smith",
        "email": "jordan.smith@webmail.com"
      },
      {
        "id": 5,
        "fullname": "Casey Montgomery",
        "email": "casey.m@startup.io"
      },
      {
        "id": 6,
        "fullname": "Linh Nguyen",
        "email": "lnguyen@university.edu"
      },
      {
        "id": 7,
        "fullname": "Marcus Thorne",
        "email": "m.thorne@agency.co"
      },
      {
        "id": 8,
        "fullname": "Sasha Ivanov",
        "email": "sasha.ivanov@domain.com"
      },
      {
        "id": 9,
        "fullname": "Amara Okafor",
        "email": "amara.o@service.biz"
      },
      {
        "id": 10,
        "fullname": "Dante Moretti",
        "email": "d.moretti@portfolio.it"
      }
    ]);
  }

  getUserById(id: number): User | undefined {
    let fullUsers = [
      {
        "id": 1,
        "fullname": "Alex Rivers",
        "email": "alex.rivers@example.com",
        "gender": "non-binary",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        "address": "123 Maple St, Springfield, IL"
      },
      {
        "id": 2,
        "fullname": "Sam T. Jenkins",
        "email": "s.jenkins@provider.net",
        "gender": "male"
      },
      {
        "id": 3,
        "fullname": "Elena Rodriguez",
        "email": "erodriguez@company.org",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        "address": "789 Pine Rd, Austin, TX"
      },
      {
        "id": 4,
        "fullname": "Jordan Smith",
        "email": "jordan.smith@webmail.com",
        "gender": "male",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
      },
      {
        "id": 5,
        "fullname": "Casey Montgomery",
        "email": "casey.m@startup.io",
        "address": "202 Birch Blvd, Seattle, WA"
      },
      {
        "id": 6,
        "fullname": "Linh Nguyen",
        "email": "lnguyen@university.edu",
        "gender": "female",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Linh",
        "address": "303 Willow Ct, Boston, MA"
      },
      {
        "id": 7,
        "fullname": "Marcus Thorne",
        "email": "m.thorne@agency.co",
        "gender": "male"
      },
      {
        "id": 8,
        "fullname": "Sasha Ivanov",
        "email": "sasha.ivanov@domain.com",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha"
      },
      {
        "id": 9,
        "fullname": "Amara Okafor",
        "email": "amara.o@service.biz",
        "gender": "female",
        "address": "606 Aspen Way, Miami, FL"
      },
      {
        "id": 10,
        "fullname": "Dante Moretti",
        "email": "d.moretti@portfolio.it",
        "gender": "male",
        "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Dante",
        "address": "707 Cherry Dr, San Diego, CA"
      }
    ];
    return fullUsers.find(user => user.id === id);
  }

  verifyUserExistsByEmail(email: string){
    // /admin/analytics -> headers -> reporting = appointmentsAndUsers, repoting = numberOfOnlineUsers
    let headers = new HttpHeaders().set("reporting", "inactiveusers");
    this.httpClient.get<boolean>('http://localhost:5228/users', 
      {params: {email: email, max_price: 100},
      headers: headers
    })
  }
}
