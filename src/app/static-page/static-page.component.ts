import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../posts/post';
import { PostsService } from '../posts/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css'],
  providers: [PostsService]
})
export class StaticPageComponent implements OnInit {
	page: Post;
  constructor(
  	private postsService: PostsService, 
  	private route: ActivatedRoute, 
  	private titleChange: Title,
  	private router: Router
  	) { }

	getPage(slug){
		this.postsService
		  .getPage(slug)
		  .subscribe(res => {
		    this.page = res[0];
		    if(!res[0]) {
		    	console.log('404');
		    	this.router.navigateByUrl('/page-not-found');
		    }
		  });
	}

	ngOnInit() {

		this.route.params.forEach((params: Params) => {
		   let slug = params['page'];
		   console.log(slug);
		   this.getPage(slug);
		   this.titleChange.setTitle(slug.replace(/-/gi, ' ').toUpperCase());
		});
	}

}
