
import {  NgModule } from '@angular/core';
import { ApicheckComponent } from './apicheck/apicheck.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
 
        
  
    ],
    imports: [
        HttpClientModule,
         
      
    
    ],
    providers: [ApicheckComponent],
    bootstrap: []
  })
  export class SharedModule { }