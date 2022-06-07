import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BathroomOneComponent } from './bathroom-one/bathroom-one.component';
import { BathroomTwoComponent } from './bathroom-two/bathroom-two.component';
import { BedroomOneComponent } from './bedroom-one/bedroom-one.component';
import { BedroomTwoComponent } from './bedroom-two/bedroom-two.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LivingRoomComponent } from './living-room/living-room.component';

const routes: Routes = [
  {path: '', component: LivingRoomComponent},
  {path: 'bedroom-one', component: BedroomOneComponent},
  {path: 'bathroom-one', component: BathroomOneComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'bedroom-two', component: BedroomTwoComponent},
  {path: 'bathroom-two', component: BathroomTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
