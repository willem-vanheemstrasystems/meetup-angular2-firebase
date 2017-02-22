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

//  private baseUrl: string = 'http://localhost/cakephp/my_angular2_map_006_project/reports_maps/api';

  constructor(protected http: Http) {super(http)}

  //   // Used with pagination
	// findAll(offset: number = 0, limit: number = 2): Observable<Posts> {
  //     return this.http
	//     .get(`${this.baseUrl}/reports/?offset=${offset}&limit=${limit}`)
	// 	.map(response => response.json())
	// 	.map(results => this.getList(results));
	// }

  // getList(data): Posts {
	// 	// room for additional filtering
	// 	return data;
	// }

  protected requestInterceptor(req: Request): Request {
    return req;
  }

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }

  @GET('/posts')
  @Produces<Post[]>((res: Response) => {
    res.headers.forEach((values: string[], name: string) => {
      console.log(name, '=', values)
    })
  })
  public getPosts(@Query('userId') userId?: number): Observable<Post[]> {
    return null;
  } 

  @POST('/posts')
  @Produces<Post>()
  public createPost(@Body post: Post): Observable<Post> {
    return null;
  }

}
