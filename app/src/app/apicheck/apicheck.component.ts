import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApicheckService } from '../service/apicheck.service';
import { Postvalues } from '../service/model';


@Component({
  selector: 'app-apicheck',
  templateUrl: './apicheck.component.html',
  styleUrls: ['./apicheck.component.css']
})
export class ApicheckComponent {

todo:any=[];
  body:Postvalues={
  id:3,
  userId:3,
  title:'welcome'
}

  constructor(private apicheck:ApicheckService){

this.get()
this.post()
this.put()





  }

  get(){
this.apicheck.getdatas()
.subscribe(data=>this.todo=data
)
  }

  post(){

    this.apicheck.postdatas(this.body)
    .subscribe(data=>console.log(data)
    )
  }

  put(){
    this.apicheck.putdatas({id:2,userId:2,title:'hello'})
    .subscribe(data=>console.log(data)
    )
  }
}
