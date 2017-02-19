import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() public blogPost: Post = new Post(1, 'Blog Title', 'Blog Body');
  @Input() public blogList: Post[] = [];

  constructor(public blogService: BlogService) { 
    this.getPosts();
  }

  ngOnInit() {
  }

  createPost() {
    this.blogService.createPost(this.blogPost);
  }

  getPosts() {
    this.blogService.getPosts().subscribe(posts => {
      this.blogList = posts;
    });
  }

}
