import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/service/home.service';
// import{Userdatas} from 'src/app/service/home.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // mydata:Userdatas[]|undefined ;
  
  title: string = '';
  body: string = '';
  userId: number | null = null;
  getalldatas:any;
  postalldatas:any;
constructor(private homeservise:HomeService ,private http :HttpClient){

}
ngOnInit() :void {
  
  // this.homeservise.gethomedatas().subscribe((res)=>this.mydata=res)
  
this.getdatas();
this.postdatas();
}
// click(){
//   this.mydata=this.mydata?.filter(userdata => userdata.userId !==2)
//   console.log(this.mydata);

//   // console.log(this.mydata?.userId);
  
  
  
// }


getdatas(){
  // data la any nu use panna view la particular ah access pannalam 
this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
  console.log(data);
  this.getalldatas=data
})
}

public postdatas(){
  let body={
    title: this.title,
    body: this.body,
    userId: this.userId ||1,
   
  };
  
  this.http.post('https://jsonplaceholder.typicode.com/posts',body).subscribe((data)=>{
    

    console.log(data);
    
this.postalldatas=data 
  })
}

}


