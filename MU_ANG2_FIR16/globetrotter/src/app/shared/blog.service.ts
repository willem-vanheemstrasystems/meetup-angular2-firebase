import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { RESTClient, BaseUrl, DefaultHeaders, GET, POST, Body, Query, Produces } from 'ng2-http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.model';

@Injectable()
@BaseUrl('https://jsonplaceholder.typicode.com')
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
export class BlogService extends RESTClient {

  constructor(protected http: Http) {super(http)}

  protected requestInterceptor(req: Request) {}

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }

  @POST('/posts')
  @Produces<Post>()
  public createPost(@Body post: Post): Observable<Post> {
    return null;
  }

  @GET('/posts')
  @Produces<Post[]>()
  public getPosts(@Query('userId') userId?: number): Observable<Post[]> {
    return null;
  } 

}
