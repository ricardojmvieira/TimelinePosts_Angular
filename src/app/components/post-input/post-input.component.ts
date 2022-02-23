import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

  @Output() add: EventEmitter<string> = new EventEmitter();
  postInput: string;
  data:any;

  constructor() {
    this.postInput = '';
  }

  ngOnInit(): void {
  }

  //emit the text to add a new post
  addPost(): void{
    this.add.emit(this.postInput);
    this.postInput = '';
  }

}
