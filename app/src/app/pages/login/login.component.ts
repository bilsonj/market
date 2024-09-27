import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginUserData} from './../../service/model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userdatas: any[] = [];

 datas:LoginUserData = {
  email: '',
  password: '',
  
};
  

  constructor(private router:Router){

  }




login(datas:NgForm){
console.log(datas);

this.userdatas=JSON.parse(localStorage.getItem('users')||'{}')




if(datas.form.invalid){
  alert('Please fill the inputs')}

 

if ( datas.form.valid &&this.userdatas.some((value)=>{
  return value.email==this.datas.email && value.password== this.datas.password
  })){
alert("done")
this.router.navigate(['/navbar']);

  }else{
    alert("failed")
  }

}


}
