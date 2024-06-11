import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { UserService } from '../../../services/user.service';
import { Blog } from '../../../shared/models/blog.model';
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
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
