import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() public posts: Post[] = [];
  @Input() public blogPost: Post = new Post(1, 'Blog Title', 'Blog Body');
  @Input() isLoading: boolean;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.blogService.createPost(this.blogPost).subscribe(post => {
      this.isLoading = false
      this.posts.push(post)
      this.blogPost = new Post(1, 'Demo Post', 'Lorem Ipsum');
    })    
  }

  onGetUserPosts() {
    this.isLoading = true
    this.blogService.getPosts(this.blogPost.userId).subscribe(posts => {
      this.isLoading = false
      this.posts = posts
    })
  }
}
