import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { BlogService } from '../shared/blog.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // Used for pagination
  count: number = 0;
  offset: number = 0;
  limit: number = 10; // choose an appropriate number
	posts: Post[];
  loading: boolean = false;
  failed: boolean = false;

  constructor(		
    private router: Router,
	  private route: ActivatedRoute,
	  private blogService: BlogService) { }

  ngOnInit() {
    // With pagination
    let observable = this.route.params
      .map(params => params['nr'])
      .map(pageNr => (pageNr - 1) * this.limit);
    observable.subscribe(offset => this.offset = offset);
    observable.share().subscribe(offset => this.findAll(offset, this.limit));
  }  

  findAll(offset: number, limit: number) {
    this.posts = [];
    this.loading = true;
    this.failed = false;
    this.blogService.findAll(offset, limit).subscribe(result => {
      //this.posts = result.posts;
      //this.count = result.count; // You can fake a count here, there is currently no count on the result
      this.loading = false;
    }, () => {
      this.loading = false;
      this.failed = true;
    });
  }

  onPageChange(offset) {
    this.offset = offset;
    this.router.navigate(['/page', (offset / this.limit) + 1]);
  }

}
