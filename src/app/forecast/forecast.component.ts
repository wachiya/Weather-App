import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {
  cityName = 'Eldoret';
  cityForecast: any;
  city: any;
  cityWeatherConditions: any;
  weatherCode: number;
  recommend: string;


  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.city = params.city;
      this.getCityForecast(this.city, 'metric');
    });
  }
  getCityForecast(city: string, metric: 'metric') {
    this.weatherService.getCityForecast(city, metric).subscribe(
      (data) => {
        this.cityForecast = data;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.cityForecast.length; i++) {
          console.log(this.cityForecast[i].weather[0].id);
          const code = this.cityForecast[i].weather[0].id;
          const recommend = this.recommendOnWeatherCondition(code);
          this.cityForecast[i].recommend = recommend;
        }
        console.log('CityWeather:', this.cityForecast);
      },
      (err) => {
        console.log('error: ', err);

      }
    );
  }
  recommendOnWeatherCondition(weatherCode): string {
    if (weatherCode >= 200 && weatherCode <= 231) {
      console.log('found');
      return 'Uh-oh! Thunderstorm coming, carry an umbrella and grab a coat';
    } else if (weatherCode >= 300 && weatherCode <= 321) {
      return 'It is gonna drizzle, grab a hoodie!';
    } else if (weatherCode >= 500 && weatherCode <= 531) {
      return 'Rainy day buddy, carry an umbrella and dress warm';
    } else if (weatherCode >= 600 && weatherCode <= 622) {
      return 'Do you wanna build a snowman???';
    } else if (weatherCode >= 800 && weatherCode <= 804) {
      return 'Clear skies, hangout!';
    } else {
      return 'Hey! carry a jacket, it is going to be pretty cloudy today';
    }
  }
}
