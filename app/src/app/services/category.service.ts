import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:7070';

  constructor(private http: HttpClient) { }

  getAmazonCategoryList(country: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/amazon-category-list`, { params: { country: country } });
  }

  getAmazonProductsByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/amazon-products-by-category`, { params: { categoryId: categoryId } });
  }
}
