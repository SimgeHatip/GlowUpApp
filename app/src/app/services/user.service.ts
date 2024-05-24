import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from "./storage.service";

const API_URL = 'http://localhost:7070/api/';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient,
                private storageService: StorageService) {
    }

    private getAuthHeaders() {
        const token = this.storageService.getToken();
        return  new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
    }

    getPublicContent(): Observable<any> {
        return this.http.get(API_URL + 'all', {responseType: 'text'});
    }

    getAdminBoard(): Observable<any> {
        return this.http.get(API_URL + 'admin', {responseType: 'text'});
    }

    getUser(id: string): Observable<any> {
        return this.http.get(API_URL + 'getUser?id=' + id,{ headers: this.getAuthHeaders()});
    }

    updateUser(id: string, user: any): Observable<any> {
        return this.http.put(`${API_URL}updateUser/${id}`, user,{ headers: this.getAuthHeaders()});
    }
}
