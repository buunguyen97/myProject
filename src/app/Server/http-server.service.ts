import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USER = 'https://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get(url, this.httpOptions);
  }

  public getUser(users: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVER_RANDOM_USER}` + users;
    return this.httpClient.get(url, this.httpOptions);
  }

  public postComment(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post(url, payload, this.httpOptions);
  }

  private REST_API_SERVER_COMMENTS = 'http://localhost:3000/comments';

  deleteComment(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER_COMMENTS}/${id}`;
    return this.httpClient.delete(url);
  }

  DadeleteComment(): Observable<any> {
    console.log('xóa nè !');
    const url = `${this.REST_API_SERVER_COMMENTS}/2`;
    return this.httpClient.delete(url);
  }
}
