import { Injectable ,OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService  {
  // public getallvalues: any;
  constructor(private http :HttpClient  ) {


   }


getdatas(){

  return this.http.get('https://jsonplaceholder.typicode.com/posts')
}
}
