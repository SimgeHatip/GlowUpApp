import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from '../shared/models/blog.model';
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    API_URL = 'http://localhost:7070/api/blogs';


    constructor(private http: HttpClient,
                private storageService: StorageService) {
    }

    private getAuthHeaders() {
        const token = this.storageService.getToken();
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
    }

    getAllBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>(this.API_URL, {headers: this.getAuthHeaders()});
    }

    getBlogById(id: string): Observable<Blog> {
        return this.http.get<Blog>(`${this.API_URL}/${id}`, {headers: this.getAuthHeaders()});
    }

    createBlog(blog: Blog, id: string): Observable<Blog> {
        const payload = { blog, userId: id };
        return this.http.post<Blog>(this.API_URL, payload, {headers: this.getAuthHeaders()});
    }

    updateBlog(id: string, blog: Blog): Observable<Blog> {
        return this.http.put<Blog>(`${this.API_URL}/${id}`, blog);
    }

    deleteBlog(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}
