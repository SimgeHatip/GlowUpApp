import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { StorageService } from '../../../services/storage.service';
import { UserService } from '../../../services/user.service';
import { EditorConfig, ST_BUTTONS } from 'ngx-simple-text-editor';

@Component({
    selector: 'app-admin-post-create',
    templateUrl: './admin-post-create.component.html',
    styleUrls: ['./admin-post-create.component.css']  // Buradaki hata düzeltildi
})
export class AdminPostCreateComponent implements OnInit {
    postForm: FormGroup;
    config: EditorConfig = {
        placeholder: 'Type something...',
        buttons: ST_BUTTONS,
    };
    isLoggedIn = false;
    currentUser: any;

    constructor(
        private fb: FormBuilder,
        private postService: PostService,
        private router: Router,
        private storageService: StorageService,
        private userService: UserService
    ) {
        this.postForm = this.fb.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            imageUrl: ['']
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

    createPost(): void {
        if (this.postForm.valid) {
            const post = {
                ...this.postForm.value,
                authorId: this.currentUser.id,
                authorName: this.currentUser.name,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            this.postService.createPost(post).subscribe(() => {
                this.router.navigate(['/admin/posts']);
            });
        }
    }
}
