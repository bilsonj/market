import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { onCreate } from '../service/model';


@Component({
  selector: 'app-add-dailog',
  templateUrl: './add-dailog.component.html',
  styleUrls: ['./add-dailog.component.css']
})
export class AddDailogComponent {
 createlist: any;
 form:onCreate|undefined
 constructor(@Inject(MAT_DIALOG_DATA) public data:onCreate[]){}

 onCreate(form:any){
console.log("create value",form.value)
this.createlist=form.value

 }
}
