import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
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

  constructor(public postService: PostService, public apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getPosts().subscribe(result =>{
      this.posts = result;
    })
  }
}
