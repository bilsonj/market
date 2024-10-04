import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postvalues } from './model';
import { Observable } from 'rxjs';
import { Getall } from './model';
import { Singleproduct } from './model';
import { Delete } from './model';
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

   getallproduct():Observable<Getall>{
    return this.http.get<Getall>('https://fakestoreapi.com/products')
   }
   singleproduct():Observable<Singleproduct>{
    return this.http.get<Singleproduct>('https://fakestoreapi.com/products/13')
   }

   postproduct(data:any){
    return this.http.post('https://fakestoreapi.com/products',data)
   }
delete():Observable<Delete>{
  return this.http.delete<Delete>('https://fakestoreapi.com/products/3')
}
   
getcard(){
  return this.http.get('https://fakestoreapi.com/carts')
}

update(){
  return this.http.put('https://fakestoreapi.com/products/1 ',{


    title: 'ave mariya',
    price: 13,
    description: 'valankanni',
    image: 'https://i.ytimg.com/vi/Y7BR7XfF9eU/hqdefault.jpg',
    category: 'pics'
  })
}

catogories(){
  return this.http.get('https://fakestoreapi.com/products/categories')
}

specificcatogary(){
  return this.http.get('https://fakestoreapi.com/products/category/electronics')
}
}

