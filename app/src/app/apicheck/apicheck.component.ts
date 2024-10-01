import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApicheckService } from '../service/apicheck.service';
import { Postvalues } from '../service/model';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';


@Component({
  selector: 'app-apicheck',
  templateUrl: './apicheck.component.html',
  styleUrls: ['./apicheck.component.css']
})
export class ApicheckComponent {

todo:any=[]
todopost:any=[];
  body:Postvalues={
  id:4,
  userId:3,
  title:'welcome'
}
  productdata: any=[];
  particular: any=[];
  addpost: any=[];
  delapi: any=[];
  getcards: any=[];
  update: any=[];
  catagory: any=[];
  specfic: any=[];

  constructor(private apicheck:ApicheckService,private matdailog:MatDialog){

this.get()
this.post()
this.put()
this.product()
this.singleproduct()
this.postproduct()
this.deleteapi()
this.cards()
this.updatevalues()
this.catagories()
this.specificcatagory()

  }

  get(){
this.apicheck.getdatas()
.subscribe(
  data=>this.todo=data
)
  }

  post(){

    this.apicheck.postdatas(this.body)
    .subscribe(data=>{
    this.todopost=data
    console.log(data);
    
    
  })
    
    
  }

  put(){
    this.apicheck.putdatas({id:2,userId:2,title:'hello'})
    .subscribe(data=>console.log(data)
    )
  }
  product(){
    this.apicheck.getallproduct()
    .subscribe(data=>{
      this.productdata=data
      console.log(data);
      
    })
  }
  singleproduct(){
    this.apicheck.singleproduct()
    .subscribe(data=>{
      this.particular=data

      console.log(data);
      
    })

  }

  postproduct(){
    this.apicheck.postproduct()
    .subscribe(data=>{
      this.addpost=data
    })
  }
  popup(product:any){
this.matdailog.open(DailogComponent,{
  data:product
  
})
  }

  deleteapi(){
    this.apicheck.delete()
    .subscribe(data=>{
      this.delapi=data
      console.log("del",data);
      
    })
  }
  cards(){
    this.apicheck.getcard()
    .subscribe(data=>{
      this.getcards=data
    })
  }
  updatevalues(){
    this.apicheck.update()
    .subscribe(data=>{
      this.update=data
      console.log( "update",data);
      
    })
  }
  catagories(){
    this.apicheck.catogories()
    .subscribe(data=>{
      this.catagory=data
    })
  }
  specificcatagory(){
    this.apicheck.specificcatogary()
    .subscribe(data=>{
      this.specfic=data
      console.log("specific",data);
      
    })
  }

}
