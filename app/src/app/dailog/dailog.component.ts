import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dailog } from '../service/model';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent {


constructor(@Inject(MAT_DIALOG_DATA) public data:any
){

}


}

