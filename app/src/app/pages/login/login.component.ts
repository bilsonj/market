import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userdatas: any[] = [];
  load=false
  datas = {

    email: '',
    password: ''
  };
  

  constructor(private router:Router){

  }
// save(){
//   this.load=true
// }

save() {
  this.load = true;
  

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
