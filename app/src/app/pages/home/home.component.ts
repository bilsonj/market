
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../service/home.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas:any
  fasewash:number=1;
  fasewashrs:number=1;
  boost:number=1;
  boostrs:number=60;
pillow:number=1;
maggi:number=1;
maggirs:number=50;
bottel:number=1
bottelrs:number=130;
pillowrs:number=200;
lunchbox:number=1;
lunchboxrs:number=110;
pens:number=1
pensrs:number=80;
snacks:number=1;
snacksrs:number=170;
doys:number=1;
doysrs:number=270;
name:string='';
feedback: string = '';

 constructor( public home:HomeService){

 }


ngOnInit():void{

 this.datas= this.home.gethomedatas()

}

increses(){
if(this.pillow !=0){
  console.log(this.pillowrs);

this.pillow++;
this.pillowrs = 200 * this.pillow;

}
}
decreses(){
  if(this.pillow !=1){   
this.pillow--;
this.pillowrs = 200 * this.pillow;
  }
}
decresesmaggi(){
  if(this.maggi !=1){   
this.maggi--;
this.maggirs = 50 * this.maggi;
  }
}
increasemaggi(){
  if(this.maggi !=0){   
this.maggi++;
this.maggirs = 50 * this.maggi;
  }
}

incresesbottel(){
  if(this.bottel !=0){   
    this.bottel++;
    this.bottelrs = 130 * this.bottel;
      }
}
decresesbottel(){
  if(this.bottel !=1){   
this.bottel--;
this.bottelrs = 130 * this.bottel;
  }
}

decreseslunch(){
  if(this.lunchbox !=1){   
this.lunchbox--;
this.lunchboxrs = 110 * this.lunchbox;
  }
}


increseslunch(){
  if(this.lunchbox !=0){   
    this.lunchbox++;
    this.lunchboxrs = 110 * this.lunchbox;
      }
}

increasepens(){
  if(this.pens !=0){   
    this.pens++;
    this.pensrs = 80 * this.pens;
      }
}

decresespens(){
  if(this.pens !=1){   
this.pens--;
this.pensrs = 80 * this.pens;
  }
}

decresessnacks(){
  if(this.snacks !=1){   
this.snacks--;
this.snacksrs = 170 * this.snacks;
  }
}

incresessnacks(){
  if(this.snacks !=0){   
    this.snacks++;
    this.snacksrs = 170 * this.snacks;
      }
}

incresesdoys(){
  if(this.doys !=0){   
    this.doys++;
    this.doysrs = 270 * this.doys;
      }
}

decresesdoys(){
  if(this.doys !=1){   
this.doys--;
this.doysrs = 270 * this.doys;
  }
}

increaseboost(){
  if(this.boost !=0){   
    this.boost++;
    this.boostrs = 60 * this.boost;
      }
}

decresesboost(){
  if(this.boost !=1){   
this.boost--;
this.boostrs = 60 * this.boost;
  }
}

incresesfacewash(){
  if(this.fasewash !=0){   
    this.fasewash++;
    this.fasewashrs = 140 * this.fasewash;
      }
}

decresesfacewash(){
  if(this.fasewash !=1){   
this.fasewash--;
this.fasewashrs = 140 * this.fasewash;
  }
}
clickmagiee(name:string):void{
alert(`your order ${name} successfull`)

}
inputvalues( enter:string):void{
  this.feedback=enter
console.log(enter)
}

}






