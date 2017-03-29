import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {
	post: Post;
  constructor(
  	private postsService: PostsService, 
  	private route: ActivatedRoute, 
  	private location: Location, 
  	private titleChange: Title,
  	private router: Router
  	) { }

	getPost(slug){
		// if(sessionStorage.getItem(slug)) {
		// 	this.post = JSON.parse(sessionStorage.getItem(slug));
		// 	return;
		// }
		this.postsService
		  .getPost(slug)
		  .subscribe(res => {
		    this.post = res[0];
		    if(!res[0]) {
		    	console.log('404');
		    	this.router.navigateByUrl('/page-not-found');
		    }
		    // else {
		    // 	console.log('200' + res[0]);
		    // 	sessionStorage.removeItem(slug);
      // 		sessionStorage.setItem(slug, JSON.stringify(res[0]));
		    // }
		    
      
		  });
	}

	goBack(): void {
  	this.location.back();
  }

	ngOnInit() {

		this.route.params.forEach((params: Params) => {
		   let slug = params['slug'];
		   this.getPost(slug);
		   this.titleChange.setTitle(slug.replace(/-/gi, ' ').toUpperCase());
		});
	}
}
