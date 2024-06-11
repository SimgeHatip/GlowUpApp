import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../shared/models/blog.model";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../services/blog.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-admin-blog-detail',
  templateUrl: './admin-blog-detail.component.html',
  styleUrl: './admin-blog-detail.component.css'
})
export class AdminBlogDetailComponent implements OnInit{
  blog: Blog | undefined;
  userAvatar: string | undefined;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe((data: Blog) => {
        this.blog = data;
        this.loadUserAvatar(data.authorId);
      });
    }
  }

  loadUserAvatar(userId: string): void {
    this.userService.getUser(userId).subscribe((user: User) => {
      this.userAvatar = user.avatarUrl;
    });
  }
}

