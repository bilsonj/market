import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Userdatas{
  userId: number;
  id: number;
  title: string;
  body: string;
} 

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 

  constructor(private http:HttpClient) { }

  gethomedatas():Observable<Userdatas[]>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
  return this.http.get<Userdatas[]>(url)



  }
  // posthomedatas():Observable<Userdatas[]>{

  // }



static(){
  const datas:Userdatas={
    userId: 11,
    id: 0,
    title: 'hi',
    body: 'welcome'
  }
  return datas
}



}
