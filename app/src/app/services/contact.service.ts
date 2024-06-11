import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URL = 'http://localhost:7070/api/contacts';

  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  private getAuthHeaders() {
    const token = this.storageService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL, { headers: this.getAuthHeaders() });
  }

  getContactById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`, { headers: this.getAuthHeaders() });
  }

  createContact(contact: any): Observable<any> {
    return this.http.post<any>(this.API_URL, contact, { headers: this.getAuthHeaders() });
  }

  updateContact(id: string, contact: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, contact, { headers: this.getAuthHeaders() });
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`, { headers: this.getAuthHeaders() });
  }
}
