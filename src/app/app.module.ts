import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ActivitiesComponent } from './activities/activities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MoodsComponent } from './moods/moods.component';
import { ActivitiesService } from './activities.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { MoodsService } from './moods.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    MoodsComponent,
    ActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WeatherService, MoodsService, ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
