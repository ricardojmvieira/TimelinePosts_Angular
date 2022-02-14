import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
  postInput: string;
  data:any;

  constructor(private postService: PostService,private apiService: ApiService,private http:HttpClient) {
    this.postInput = '';
  }

  ngOnInit(): void {
  }

  //calls apiService to add a new post
  addPost(): void{
    //this.postService.addPost(this.postInput);
    this.apiService.addPost(this.postInput).subscribe();
    this.postInput = '';
    window.location.reload();
  }

}
