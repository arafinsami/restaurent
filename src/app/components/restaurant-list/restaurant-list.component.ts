import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Restaurent } from '../../models/restaurent';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurant: Restaurent;
  
  sessionId: number;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  fetchRestaurants(): void {
    this.restaurantService.getRestaurants(this.sessionId).subscribe(
      (response) => {
        response = this.restaurant;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

}
