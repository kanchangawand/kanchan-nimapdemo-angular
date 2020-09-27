import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: any;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000";
  }

  getAllCategory(): Observable<any> {
    return this.http.get(this.url +'/api/categories/getAllCategories');
  }

  createCategory(data): Observable<any> {
    return this.http.post(this.url +  '/api/categories/create', data);
  }

  deleteCategory(id):Observable<any> {
    return this.http.delete(this.url +  '/api/categories/deleteCategory/'+id);
  }
}
