import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: any;

  constructor(private http: HttpClient) {
    this.url = environment.backendUrl;
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

  updateCategory(id,data):Observable<any> {
    return this.http.put(this.url +  '/api/categories/updateCategory/'+id,data);
  }
}
