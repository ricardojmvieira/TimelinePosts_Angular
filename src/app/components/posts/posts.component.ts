import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post.service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() public post!: Post;
  date!: string;
  currentDate!: Date;

  constructor(private postService: PostService, public modalService: NgbModal, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

  //Parse to milliseconds to get a difference between the current date and the post date and return the right value
  timeline(): string {
    let datePost = Date.parse(this.post.time);
    let dateNow = Date.parse(String(this.currentDate));
    let diff = dateNow - datePost;

    if(diff > 60000){
      this.date = this.datePipe.transform(this.post.time, 'dd-MM-yy hh:mm a') || '';
    }else{
      if(diff == 0){
        this.date = 'now'
      }else{
        let seconds = diff / 1000;
        this.date = seconds + ' seconds ago'
      }
    }
    return this.date;
  }

  //Open a delete modal confirmation and delete on right result
  open(): void{
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.result.then(() => {
      this.postService.deletePost(this.post.id);
    });
  }
}
