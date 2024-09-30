import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from 'src/app/service/home.service';
// import{Userdatas} from 'src/app/service/home.service'
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from 'src/app/dailog/dailog.component';


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
constructor(private homeservise:HomeService ,private http :HttpClient,private  matdailog: MatDialog){

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


 getdatas():void{
  //  *ngfor use to take a dadas in particular or whole datas 
 this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
  console.log(data);
  this.getalldatas=data
})
}

public postdatas():void{
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
   

opendailog():void{
  this.matdailog.open(DailogComponent)
}


}


