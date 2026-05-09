import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, {
      
      params: this.buildParams(params)
    });
  }

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body);
  }

  patch<T>(url: string, body?: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${url}`, body);
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`, {
      
      params: this.buildParams(params)
    });
  }

  private buildParams(params?: any): HttpParams {
    let httpParams = new HttpParams();

    if (!params) return httpParams;

    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        httpParams = httpParams.set(key, params[key]);
      }
    });

    return httpParams;
  }
}