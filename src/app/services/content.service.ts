import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const URL = `${environment.api.protocol}://${environment.api.host}:${environment.api.port}`;

@Injectable()
export class ContentService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'csk=' + localStorage.getItem('csk')});
  private contentsUrl = `${URL}/a/contents`;
  private options = { headers: this.headers, withCredentials: true };;

  constructor(
    private http: HttpClient
  ) { }

  public getContentList(query: string, start: Number, size: Number): Observable<{}> {
    const url = `${this.contentsUrl}?q=${query}&start=${start}&size=${size}`;
    return this.http.get(url, this.options);
  }
}
