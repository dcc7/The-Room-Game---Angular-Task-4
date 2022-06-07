import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { MinimapComponent } from './minimap/minimap.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { BedroomOneComponent } from './bedroom-one/bedroom-one.component';
import { BathroomOneComponent } from './bathroom-one/bathroom-one.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomTwoComponent } from './bedroom-two/bedroom-two.component';
import { BathroomTwoComponent } from './bathroom-two/bathroom-two.component';

@NgModule({
  declarations: [
    AppComponent,
    LivingRoomComponent,
    MinimapComponent,
    IndicatorComponent,
    BedroomOneComponent,
    BathroomOneComponent,
    KitchenComponent,
    BedroomTwoComponent,
    BathroomTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
