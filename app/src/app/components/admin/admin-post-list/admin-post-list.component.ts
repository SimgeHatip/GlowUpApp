import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from "../../../shared/models/post";

@Component({
    selector: 'app-admin-post-list',
    templateUrl: './admin-post-list.component.html',
    styleUrls: ['./admin-post-list.component.css']
})
export class AdminPostListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.loadPosts();
    }

    loadPosts(): void {
        this.postService.getAllPosts().subscribe(
            (data: Post[]) => {
                this.posts = data;
            },
            (error) => {
                console.error('Error fetching posts', error);
            }
        );
    }
}
