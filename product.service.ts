import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: any;

  constructor(private http: HttpClient) {
    this.url = environment.backendUrl;
  }

  getAllproduct(params): Observable<any> {
    return this.http.get(this.url +'/api/products/pagination',{ params });
  }

  createProduct(data): Observable<any> {
    return this.http.post(this.url +  '/api/products/create', data);
  }

  deleteProduct(id):Observable<any> {
    return this.http.delete(this.url +  '/api/products/deleteProduct/'+id);
  }

  updateProduct(id,data):Observable<any> {
    return this.http.put(this.url +  '/api/products/updateProduct/:id'+id,data);
  }
}
