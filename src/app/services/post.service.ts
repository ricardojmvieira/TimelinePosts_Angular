import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  index!: number;
  date!: Date;

  constructor() {
    let posts = this.getPosts();
    if(posts.length == 0){
      this.index = 0;
    }else{
      let postId = posts[posts.length-1].id;
      this.index = postId + 1;
    }
   }

   //receive data, create and save a new object to localStorage
   addPost(text: string): void{
     if(text != ''){
      this.date = new Date();
      let post = new Post(this.index, text, String(this.date));
      let posts = this.getPosts();
      posts.push(post);
      this.setLocalStoragePosts(posts);
      this.index++;
     }
   }

   //get posts from localStorage
   getPosts(): Post[]{
     let localStoragePost = JSON.parse(localStorage.getItem('posts') || '{"posts":[]}');
     return localStoragePost.posts;
   }

   //receive an id and save to localStorage the others posts ids
   deletePost(id: number): void{
     let posts = this.getPosts();
     posts = posts.filter((post) => post.id != id);
     this.setLocalStoragePosts(posts);
   }

   //receive a post a save it to localStorage
   setLocalStoragePosts(posts: Post[]): void {
     localStorage.setItem('posts', JSON.stringify({posts:posts}));
   }
}
