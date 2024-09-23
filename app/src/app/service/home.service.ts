import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  gethomedatas(){
    return this.http.get(this.url)
  }
}
