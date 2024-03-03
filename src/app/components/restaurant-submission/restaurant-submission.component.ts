import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurent } from 'src/app/models/restaurent';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant-submission',
  templateUrl: './restaurant-submission.component.html',
  styleUrls: ['./restaurant-submission.component.css']
})
export class RestaurantSubmissionComponent implements OnInit {

  restaurant: Restaurent;
  
  restaurantForm: FormGroup;

  constructor(private restaurantService: RestaurantService,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  submitRestaurant() {
    if (this.restaurantForm.valid) {
      this.restaurant = Object.assign({}, this.restaurantForm.value);
      this.restaurantService.submitRestaurant(this.restaurant).subscribe(data => {
        this.restaurantForm.reset();
        this.route.navigateByUrl('/restaurent-list');
        console.log(data);
      },
        error => {
          console.log(error);
        });
    }
  }

  formInit() {
    this.restaurantForm = this.fb.group({
      sessionId: [''],
      restaurentName: [''],
    });
  }
}
