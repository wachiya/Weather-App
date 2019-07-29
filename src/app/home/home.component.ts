import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityName = 'Eldoret';
  weatherCondition: any;
  cityWeatherConditions: any;
  weatherCode: number;
  recommend: string;
  error: string;

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit() {
    this.getCondition();
  }

  getCondition() {
    this.weatherService.getCityWeather(this.cityName, 'metric').subscribe((data) => {
      this.cityWeatherConditions = data;
      this.recommend = this.recommendOnWeatherCondition(this.cityWeatherConditions.weather[0].id);
      this.error = undefined;
    }, (err) => {
      this.error = err;
    });
  }

  recommendOnWeatherCondition(weatherCode): string {
    switch (true) {
      case (weatherCode >= 200 && weatherCode <= 231):
        return 'return uh- o! Thunerstorm coming, carry an umbrella';
        break;

      case (weatherCode >= 300 && weatherCode <= 321):
        return 'It is gonna drizzle, grab a hoodie!';
        break;

      case (weatherCode >= 500 && weatherCode <= 531):
        return 'Rainy day buddy, carry an umbrella and dress warm';
        break;

      case (weatherCode >= 600 && weatherCode <= 622):
        return 'Do you wanna build a snowman???';
        break;

      case (weatherCode >= 800 && weatherCode <= 804):
        return 'Clear skies, hangout!';
        break;

      default:
        return 'Hey! carry a jacket, it is going to be pretty cloudy today';
        break;
    }
  }

}
