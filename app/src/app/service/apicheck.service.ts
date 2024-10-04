import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Getcarts, Postvalues, Product, Specific, Update } from './model';
import { Observable } from 'rxjs';
import { Getall } from './model';
import { Singleproduct } from './model';
import { Delete } from './model';
@Injectable({
  providedIn: 'root'  
})
export class ApicheckService {

  constructor(private http :HttpClient) { }



   getallproduct():Observable<Getall[]>{
    return this.http.get<Getall[]>('https://fakestoreapi.com/products')
   }
   singleproduct():Observable<Singleproduct>{
    return this.http.get<Singleproduct>('https://fakestoreapi.com/products/13')
   }

   postproduct(data:Product):Observable<Product>{
    return this.http.post<Product>('https://fakestoreapi.com/products',data)
   }
delete():Observable<Delete>{
  return this.http.delete<Delete>('https://fakestoreapi.com/products/3')
}
   
getcard():Observable<Getcarts>{
  return this.http.get<Getcarts>('https://fakestoreapi.com/carts')
}

update():Observable<Update>{
  return this.http.put<Update>('https://fakestoreapi.com/products/1 ',{


    title: 'ave mariya',
    price: 13,
    description: 'valankanni',
    image: 'https://i.ytimg.com/vi/Y7BR7XfF9eU/hqdefault.jpg',
    category: 'pics'
  })
}

catogories():Observable<string>{
  return this.http.get<string>('https://fakestoreapi.com/products/categories')
}

specificcatogary():Observable<Specific[]>{
  return this.http.get<Specific[]>('https://fakestoreapi.com/products/category/electronics')
}
}

