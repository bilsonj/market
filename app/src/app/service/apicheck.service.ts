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

   getallproduct(){
    return this.http.get('https://fakestoreapi.com/products ')
   }
   singleproduct(){
    return this.http.get('https://fakestoreapi.com/products/13')
   }

   postproduct(){
    return this.http.post('https://fakestoreapi.com/products',{

      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.ytimg.com/vi/Y7BR7XfF9eU/hqdefault.jpg',
      category: 'electronic'
    })
   }
delete(){
  return this.http.delete('https://fakestoreapi.com/products/3')
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

