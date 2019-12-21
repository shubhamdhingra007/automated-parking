import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ParkingListingComponent } from './components/parking-listing/parking-listing.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserInputComponent
  },
  {
    path: 'listing',
    component: ParkingListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
