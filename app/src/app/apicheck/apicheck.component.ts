import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApicheckService } from '../service/apicheck.service';
import { Postvalues } from '../service/model';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { Product } from '../service/model';
import { FormDailogComponent } from '../form-dailog/form-dailog.component';
import { AddDailogComponent } from '../add-dailog/add-dailog.component';

import { Observable } from 'rxjs';
import { Singleproduct } from '../service/model';
import { Delete } from '../service/model';
import { Getall } from './../service/model';
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
  productdata:Getall|undefined
  particular: Singleproduct | undefined;
  addpost: any=[];
  delapi:Delete | undefined;
  getcards: any=[];
  update: any=[];
  catagory: any=[];
  specfic: any=[];
formdata: any;
add: any;

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
    .subscribe(data=>console.log("putdatas",data)
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
    var data:Product={
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    this.apicheck.postproduct(data)
    .subscribe(data=>{
      this.addpost=data
    })
  }
  popup(product:any){
this.matdailog.open(DailogComponent,{
  data:product
  
})
  }

  popupform(formdata:any){
    this.matdailog.open(FormDailogComponent,{
      data:formdata
    })
  }
adddailog(add:any){
  this.matdailog.open(AddDailogComponent,{
data:add
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








