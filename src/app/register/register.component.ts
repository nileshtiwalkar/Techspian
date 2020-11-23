import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../usermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  users: User[];
  register: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.user = new User({});
    this.register = this.fb.group({
      name: [this.user.name],
      email: [this.user.email,[Validators.email]],
      password: [this.user.password,[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\\d@$!%*?&]{0,}')]],
      
     
    });

  }

  ngOnInit() {
    this.users = new Array();

  }


  onSubmit() {
    //  TODO: Use EventEmitter with form value   
    this.users.push(this.register.value);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(["/register/login"]);
  }
}

