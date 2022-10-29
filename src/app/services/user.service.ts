import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from 'src/types/usersList';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:5000/users';
  constructor(private httpclient: HttpClient) {}
  getUserList(): Observable<UserList[]> {
    return this.httpclient.get<UserList[]>(`${this.baseURL}`);
  }
  creatUser(user: any): Observable<Object> {
    return this.httpclient.post(`${this.baseURL}`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
