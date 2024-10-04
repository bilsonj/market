import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApicheckService } from '../service/apicheck.service';

import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import {  Dailog, Formdata, onCreate, Product, Specific, Update } from '../service/model';
import { FormDailogComponent } from '../form-dailog/form-dailog.component';
import { AddDailogComponent } from '../add-dailog/add-dailog.component';

import { Observable } from 'rxjs';
import { Singleproduct } from '../service/model';

import { Getall, Delete, Postvalues, Getcarts,  } from './../service/model';
@Component({
  selector: 'app-apicheck',
  templateUrl: './apicheck.component.html',
  styleUrls: ['./apicheck.component.css']
})
export class ApicheckComponent {


  productdata:Getall[] =[]
  particular: Singleproduct | undefined;
  addpost: Product|undefined;
  delapi:Delete |undefined;
  getcards: Getcarts|undefined;
  update: Update|undefined;
  catagory:string|undefined;
  specfic: Specific[] =[];
  //popup
formdata:Formdata[]=[];
add:onCreate[]=[];
productpop:Dailog[]=[]


  constructor(private apicheck:ApicheckService,private matdailog:MatDialog){
    // const httpClient = new HttpClient();
    // apicheck = new ApicheckService(httpClient);

    // this.get()
    // this.post()

    this.product()
    this.singleproduct()
    this.postproduct()
    this.deleteapi()
    this.cards()
    this.updatevalues()
    this.catagories()
    this.specificcatagory()

  }




  product(){
    this.apicheck.getallproduct()
    .subscribe((data:Getall[])=>{
      this.productdata=data
      console.log(data);
      
    })
  }

 

  
  singleproduct(){
    this.apicheck.singleproduct()
    .subscribe((data :Singleproduct)=>{
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
  popup(productpop:Dailog[]){
this.matdailog.open(DailogComponent,{
  data:productpop
  
})
  }

  popupform(formdata:Formdata[]){
    this.matdailog.open(FormDailogComponent,{
      data:formdata
    })
  }
adddailog(add:onCreate[]){
  this.matdailog.open(AddDailogComponent,{
data:add
  })
}
  deleteapi(){
    this.apicheck.delete()
    .subscribe((data:Getall)=>{
      this.delapi=data
      console.log("del",data);
      
    })
  }
  cards(){
    this.apicheck.getcard()
    .subscribe((data :Getcarts)=>{
      this.getcards=data
    })
  }
  updatevalues(){
    
    this.apicheck.update()
    .subscribe((data :Update)=>{
      this.update=data
      console.log( "update",data);
      
    })
  }
  catagories(){
    this.apicheck.catogories()
    .subscribe((data:string)=>{
      this.catagory=data
    })
  }
  specificcatagory(){
    this.apicheck.specificcatogary()
    .subscribe((data :Specific[])=>{
      this.specfic=data
      console.log("specific",data);
      
    })
  }


}








