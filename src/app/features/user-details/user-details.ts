import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailedInfo } from '../../shared/domain/user-detailed-info';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  userDetailedInfo?: UserDetailedInfo;
  usersDetailedInfo: UserDetailedInfo[] = [
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
]

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    let userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if(Number.isNaN(userId)){
      this.router.navigate(['404']);
    } else {
      // call the backend with the userId to get the user details
      this.getUserById(userId);
    }
    
  }

  getUserById(id: number) {
    // backend call to fetch detailed information per user
   let foundUser = this.usersDetailedInfo.find(user => user.id === id);
    this.userDetailedInfo = foundUser;
  }
}
