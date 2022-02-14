import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostInputComponent } from './components/post-input/post-input.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostInputComponent,
    PostsComponent,
    ModalDeleteComponent,
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule, HttpClientModule
  ],
  providers: [PostService, DatePipe, ApiService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalDeleteComponent ]
})
export class AppModule { }
