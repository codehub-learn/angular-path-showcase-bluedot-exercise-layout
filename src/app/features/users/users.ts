import { Component } from '@angular/core';
import { User } from '../../shared/domain/user';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user-service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  users: User[] = [];
  //userService: UserService = inject(UserService); // alternative to constructor injection

  constructor(private router: Router, private userService: UserService) {
    this.userService.getUsers().pipe(delay(2000)).subscribe(users => {
      console.log(users);
      console.log("within the subscribe method");
    });
    console.log("outside subscribe method");
    
    //this.users = this.userService.getUsers();
  }

  viewDetails(id: number) {
    // perform logic
    this.router.navigate(['/users', id]); // localhost:4200/users/1

  }
}
