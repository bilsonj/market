import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';
import { Product } from '../service/model';
import { ApicheckService } from '../service/apicheck.service';

@Component({
  selector: 'app-form-dailog',
  templateUrl: './form-dailog.component.html',
  styleUrls: ['./form-dailog.component.css']
})
export class FormDailogComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data:any,private apicheck:ApicheckService ){

 }


 onSubmit(form: any) {


  
    var data:Product={
      title: form.value.title,
      price: form.value.price,
      description: form.value.description,
      image: form.value.image,
      category: form.value.category
    }
    this.apicheck.postproduct(data)
    .subscribe(res=>{
      console.log("res", res);
 
      
    })
  console.log('Form Values:', form.value);
  console.log(form.value.title);
  
}
//  showtoast(){
//   this.toastservice.success('Product stored successfully', 'Success');
//  }
}
