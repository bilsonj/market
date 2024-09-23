import { Component } from '@angular/core';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent {
userrecords:any[]=[];
data={
  name:"",
  email:"",
  password:""
}

constructor(){
  this.userrecords=JSON.parse(localStorage.getItem('users')||'{}')
}
}
