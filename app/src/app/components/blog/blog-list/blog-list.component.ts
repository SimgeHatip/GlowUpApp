import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { UserService } from '../../../services/user.service';
import { Blog } from '../../../shared/models/blog.model';
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  userAvatars: { [key: string]: string } = {}; // Kullanıcı ID'sine göre avatar URL'leri

  constructor(private blogService: BlogService, private userService: UserService) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
      this.blogs.forEach(blog => {
        this.loadUserAvatar(blog.authorId);
      });
    });
  }

  loadUserAvatar(userId: string): void {
    this.userService.getUser(userId).subscribe((user: User) => {
      this.userAvatars[userId] = user.avatarUrl;
    });
  }
}
