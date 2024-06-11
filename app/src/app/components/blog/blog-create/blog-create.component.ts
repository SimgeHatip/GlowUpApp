import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {Blog} from '../../../shared/models/blog.model';
import {Router} from '@angular/router';
import {StorageService} from '../../../services/storage.service';
import {UserService} from '../../../services/user.service';
import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';

@Component({
    selector: 'app-blog-create',
    templateUrl: './blog-create.component.html',
    styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
    blog: Blog = {
        id: '',
        title: '',
        content: '',
        authorId: '',
        authorName: '',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    config: EditorConfig = {
        placeholder: 'Type something...',
        buttons: ST_BUTTONS,
    };
    isLoggedIn = false;
    currentUser: any;

    constructor(
        private blogService: BlogService,
        private router: Router,
        private storageService: StorageService,
        private userService: UserService
    ) {
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
        this.blog.authorName = this.currentUser.name;
        this.blogService.createBlog(this.blog, this.currentUser.id).subscribe(() => {
            this.router.navigate(['/blogs']);
        });
    }
}