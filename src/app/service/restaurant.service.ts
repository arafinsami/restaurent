import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurent } from '../models/restaurent';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:8080/restaurant';

  constructor(private http: HttpClient) { }

  submitRestaurant(restaurant: Restaurent): Observable<Restaurent> {
    return this.http.post<Restaurent>(this.apiUrl, restaurant);
  }

  getRestaurants(sessionId: number): Observable<Restaurent> {
    return this.http.get<Restaurent>(this.apiUrl + "/random/"+ sessionId);
  }
}
