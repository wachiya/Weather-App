import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MoodsComponent } from './moods/moods.component';
import { ActivitiesComponent } from './activities/activities.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'forecast/:city', component: ForecastComponent },
  { path: 'moods', component: MoodsComponent },
  { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
