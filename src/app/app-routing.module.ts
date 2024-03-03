import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './components/session/session.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantSubmissionComponent } from './components/restaurant-submission/restaurant-submission.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurent-list', pathMatch: 'full'},
  { path: 'session', component: SessionComponent },
  { path: 'restaurent-list', component: RestaurantListComponent },
  { path: 'restaurent-submission', component: RestaurantSubmissionComponent },
  { path: 'user', component: UserComponent } 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }