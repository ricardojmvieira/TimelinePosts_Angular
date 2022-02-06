import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
  postInput: string;

  constructor(private postService: PostService) {
    this.postInput = '';
  }

  ngOnInit(): void {
  }

  //calls postService to add a new post
  addPost(): void{
    this.postService.addPost(this.postInput);
    this.postInput = '';
  }
}
