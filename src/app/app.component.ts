import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Post } from './classes/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Timeline-Angular_RicardoVieira';
  posts!:Post[];

  constructor(public apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getPosts().subscribe(result =>{
      this.posts = result;
    })
  }

  //receive an id, calls apiService to delete the post and update posts
  deletePost(id: number){
    this.apiService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id != id);
    });
  }

  //receive text, calls apiService to add a new post and update posts
  addPost(text: string){
    this.apiService.addPost(text).subscribe(() => {
      this.ngOnInit();
    });
  }
}
