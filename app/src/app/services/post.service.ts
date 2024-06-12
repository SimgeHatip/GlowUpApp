import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    API_URL = 'http://localhost:7070/api/posts';

    constructor(private http: HttpClient, private storageService: StorageService) {}

    private getAuthHeaders() {
        const token = this.storageService.getToken();
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
    }

    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.API_URL, { headers: this.getAuthHeaders() });
    }

    getPostById(id: string): Observable<Post> {
        return this.http.get<Post>(`${this.API_URL}/${id}`, { headers: this.getAuthHeaders() });
    }

    createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.API_URL, post, { headers: this.getAuthHeaders() });
    }

    updatePost(id: string, post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.API_URL}/${id}`, post, { headers: this.getAuthHeaders() });
    }

    deletePost(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`, { headers: this.getAuthHeaders() });
    }
}
