import { Component } from '@angular/core';

import { HomeService } from 'src/app/service/home.service';
import{Userdatas} from 'src/app/service/home.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mydata:Userdatas[]|undefined ;
constructor(private homeservise:HomeService){

}
ngOnInit() {
  
  this.homeservise.gethomedatas().subscribe((res)=>this.mydata=res)


}
click(){
  this.mydata=this.mydata?.filter(userdata => userdata.userId !==2)
  console.log(this.mydata);

  // console.log(this.mydata?.userId);
  
  
  
}


}


