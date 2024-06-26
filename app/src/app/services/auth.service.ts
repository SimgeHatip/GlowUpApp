import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

const AUTH_API = 'http://localhost:7070/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient,
                private storageService: StorageService) {
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'signin',
            {username, password},
            httpOptions
        );
    }

    register(name: string, lastName: string, username: string, email: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'signup',
            {name, lastName, username, email, password},
            httpOptions
        );
    }

    logout(): Observable<any> {
        return this.http.post(AUTH_API + 'logout', {}, httpOptions);
    }

    logoutClient(): void {
        this.storageService.clean();
    }

    getUserId(): string {
        const user = this.storageService.getUser();
        return user ? user.id : null;
    }

    saveUserData(token: string, user: any): void {
        this.storageService.saveToken(token);
        this.storageService.saveUser(user);
    }

    getToken(): string | null {
        return this.storageService.getToken();
    }
}
