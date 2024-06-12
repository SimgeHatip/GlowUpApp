import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of, switchMap} from "rxjs";
import {SkincareProduct} from "../models/SkincareProduct";
import {StorageService} from "./storage.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:7070/api/products';
  private placeholderUrl = 'assets/placeholder-products.json';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  private getAuthHeaders() {
    const token = this.storageService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getProducts(query: string, limit: number): Observable<SkincareProduct[]> {
    let params = new HttpParams().set('query', query).set('limit', limit.toString());

    return this.http.get<{data: SkincareProduct[][]}>(this.placeholderUrl).pipe(
        map(response => response.data.flat()),
        switchMap(placeholderProducts => {
          return this.http.get<{data: SkincareProduct[][], status: string}>(this.apiUrl, { headers: this.getAuthHeaders(), params }).pipe(
              map(response => {
                if (response.status === 'Success') {
                  return response.data.flat();
                } else {
                  return placeholderProducts;
                }
              }),
              catchError(() => of(placeholderProducts)) // Hata durumunda statik verileri döndür
          );
        })
    );
  }
}
