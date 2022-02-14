import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../classes/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  index!: number;
  date!: Date;
  url:string = "http://timeline-lumen-ricardovieira/public/index.php/api/posts"

  constructor(private http:HttpClient) { }

  //get posts from api
  getPosts(): Observable<any>{
    return this.http.get(this.url);
  }

  //receives data, create and insert a new object to the database
  addPost(text: string): Observable<any>{
    if(text != ''){
     this.date = new Date();
     let post = new Post(this.index, text, String(this.date));
     this.index++;
     return this.http.post(this.url,post);
    }
    return this.http.post(this.url,null);
  }

  //receives an id and remove the associated post from the database
  deletePost(id: number): Observable<any>{
    return this.http.delete(this.url + '/'+ id);
  }

}
