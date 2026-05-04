import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailedInfo } from '../../shared/domain/user-detailed-info';
import { UserService } from '../../shared/services/user-service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  userDetailedInfo?: UserDetailedInfo;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    let userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if(Number.isNaN(userId)){
      this.router.navigate(['404']);
    } else {
      // call the backend with the userId to get the user details
      this.userDetailedInfo = this.userService.getUserById(userId);
    }
    
  }
}
