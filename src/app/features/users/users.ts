import { Component } from '@angular/core';
import { User } from '../../shared/domain/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  users: User[] = [
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
  ]

  constructor(private router: Router) {
  }

  viewDetails(id: number) {
    this.router.navigate(['/users', id]); // localhost:4200/users/1 
  }
}
