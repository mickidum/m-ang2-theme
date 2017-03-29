import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

load_button: boolean = true;
page_counter: number = 2;
posts: Post[];
more_posts: Post[] = [];

constructor( private postsService: PostsService, private router: Router, private titleChange: Title ) { }

getPosts(){
	// if(sessionStorage.getItem('posts')) {
	// 	this.posts = JSON.parse(sessionStorage.getItem('posts'));
	// 	return;
	// }
	this.postsService
    .getPosts()
    .subscribe(res => {
      this.posts = res;
      console.log(res)
      // sessionStorage.removeItem('posts');
      // sessionStorage.setItem('posts', JSON.stringify(res));
    });
  
}

getMorePosts(page_counter: any){
  // if(sessionStorage.getItem('posts')) {
  //   this.posts = JSON.parse(sessionStorage.getItem('posts'));
  //   return;
  // }
  page_counter = this.page_counter;
  
  this.postsService
    .getPosts(page_counter)
    .subscribe(res => {
      res.forEach(o => this.more_posts.push(o));
      if(!res.length) {
        this.hide_load_more_button();
      }
      // sessionStorage.removeItem('posts');
      // sessionStorage.setItem('posts', JSON.stringify(res));
    });
  this.page_counter++;
}

hide_load_more_button() {
  console.log('hidden');
  return this.load_button = false;
}

ngOnInit() {
  this.getPosts();
  this.titleChange.setTitle('All Posts');
}

}
