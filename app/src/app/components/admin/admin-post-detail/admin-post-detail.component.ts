import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../shared/models/post';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-admin-post-detail',
  templateUrl: './admin-post-detail.component.html',
  styleUrls: ['./admin-post-detail.component.css']
})
export class AdminPostDetailComponent implements OnInit {
  post: Post | undefined;
  userAvatar: string | undefined;

  constructor(
      private route: ActivatedRoute,
      private postService: PostService,
      private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPostById(id).subscribe((data: Post) => {
        this.post = data;
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
