import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.scss',
})
export class UserRegistration {
  
  // template forms
  newBugTitle: string = "Ioannis"; // template form binding

    onChange() { // template form on change
    console.log("hello");
  }

  // reactive form

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl('Ioannis', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]),
    });
  }

  onSubmit() {
    console.log("hello 123");
    console.log(this.myForm);
    console.log(this.myForm.get("firstName")?.errors);
    console.log(this.myForm.get("firstName")?.hasError("required"));
    if(this.myForm.valid) {
      console.log("form successfully submitted");
      // send the form data to the server
    }
  }


}
