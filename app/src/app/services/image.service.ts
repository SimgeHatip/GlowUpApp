import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  uploadImage(imageBase64: string): Observable<any> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify({image: imageBase64});

    return this.http.post('http://localhost:5000/upload', body, {headers: headers});
  }

}
