import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Ensure you have an AuthService to manage the token

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    uploadImage(imageBase64: string): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({ image: imageBase64 });

        return this.http.post('http://localhost:5000/upload', body, { headers: headers });
    }

    uploadSkinType(skinType: string, userId: string): Observable<any> {
        const token = sessionStorage.getItem('auth-token');
        console.log('token', token); // Check if the token is being retrieved correctly
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const body = JSON.stringify({ skinType: skinType, userId: userId });

        return this.http.post('http://localhost:7070/api/skintype', body, { headers: headers });
    }
}
