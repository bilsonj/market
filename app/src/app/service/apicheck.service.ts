import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postvalues } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicheckService {

  constructor(private http :HttpClient) { }


  getdatas(){
   return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
   
  }

  postdatas(data:Postvalues):Observable<Postvalues>{
    return this.http.post<Postvalues>('https://jsonplaceholder.typicode.com/todos',data)
    
   }

   putdatas( data:any){
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data)
    
   }
}

