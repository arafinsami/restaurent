import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  joinSession(sessionId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/join`, { sessionId });
  }

  leaveSession(sessionId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/leave`, { sessionId });
  }
}
