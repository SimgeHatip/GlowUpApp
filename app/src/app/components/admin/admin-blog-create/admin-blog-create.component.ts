import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../../../shared/models/blog.model';
import { EditorConfig, ST_BUTTONS } from 'ngx-simple-text-editor';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-blog-create',
  templateUrl: './admin-blog-create.component.html',
  styleUrls: ['./admin-blog-create.component.css']
})
export class AdminBlogCreateComponent implements OnInit {
  blogForm: FormGroup;
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
  isLoggedIn = false;
  currentUser: any;

  constructor(
      private fb: FormBuilder,
      private blogService: BlogService,
      private router: Router,
      private storageService: StorageService,
      private userService: UserService
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.getUsers();
  }

  getUsers(): void {
    if (this.isLoggedIn) {
      const id = this.storageService.getUser().id;
      this.userService.getUser(id).subscribe(
          (data) => {
            this.currentUser = data;
          },
          (error) => {
            console.error('Error fetching user data', error);
          }
      );
    }
  }

  createBlog(): void {
    if (this.blogForm.valid) {
      const blog: Blog = {
        ...this.blogForm.value,
        id: '',
        authorId: this.currentUser.id,
        authorName: this.currentUser.name,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.blogService.createBlog(blog, this.currentUser.id).subscribe(() => {
        this.router.navigate(['/admin/blogs']);
      });
    }
  }
}
