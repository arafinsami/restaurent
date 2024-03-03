import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = 'http://localhost:8080/api/session';

  constructor(private http: HttpClient) { }

  createSession(): Observable<string> {
    return this.http.post<string>("", null);
  }

  joinSession(sessionId: number): Observable<void> {
    return this.http.put<void>("", null);
  }

  endSession(): Observable<void> {
    return this.http.put<void>("", null);
  }
}
