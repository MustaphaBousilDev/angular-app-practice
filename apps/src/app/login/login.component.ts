import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    //commonModule providing angular directives and pipes that will be using in template
    CommonModule,
    //provides directives and services needed for working with forms,
    FormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  }

  isSubmetted = false;
  isLoggedIn = false;

  validationMessages = {
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    passwordRequired: 'Password is required',
    passwordLength: 'Password must be at least 6 characters'
  }

  onSubmit(){
    this.isSubmetted = true;
    if(this.loginData.email && this.loginData.password && this.loginData.password.length >6){
      console.log('Form Submited', this.loginData)
      this.isLoggedIn = true;
    }
  }

  resetForm(){
    this.loginData = {
      email: '',
      password: ''
    }
    this.isSubmetted = false;
    this.isLoggedIn = false;
  }
}
