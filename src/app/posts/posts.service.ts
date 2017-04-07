import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {

private postsUrl = "http://localhost/test1/wp-json/wp/v2/";

constructor(private http: Http) { }

getPosts(page: any = 1): Observable<Post[]> {

    return this.http
      .get(this.postsUrl + `posts?per_page=3&page=${page}&_embed`)
      .map((res: Response) => res.json());

}

getPost(slug): Observable<Post> {

      return this.http
        .get(this.postsUrl + `posts?slug=${slug}&_embed=1`)
        .map((res: Response) => res.json());

}

getPage(slug): Observable<Post> {

      return this.http
        .get(this.postsUrl + `pages?slug=${slug}&_embed=1`)
        .map((res: Response) => res.json());

}

}
