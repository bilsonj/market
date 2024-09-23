



import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userdatas: any[] = [];
  datas = {
    name: "",
    email: '',
    password: ''
  };

  constructor(private route: Router) {
    this.loadUserData();
  }

  loadUserData() {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      this.userdatas = JSON.parse(storedData);
    }
  }

  saveall(data: NgForm) {
    if (data.form.invalid) {
      alert('Please fill the inputs');
    } else if (data.form.valid) {
      if (this.userdatas.some(user => user.email === this.datas.email)) {
        alert("Duplicate email detected");
      } else {
        this.userdatas.push(this.datas);
        localStorage.setItem("users", JSON.stringify(this.userdatas));
        alert('Data saved');
        this.route.navigate(['login']);
      }
    }
  }


}