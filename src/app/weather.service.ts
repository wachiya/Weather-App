import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable} from 'rxjs' ;
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '43df78ac0d47e274a21911b005006b33';
  apiUrl = 'https://api.openweathermap.org/data/2.5/';


  constructor(private http: HttpClient) {

  }
  getCityWeather(city: string, metric: 'metric'): Observable<any> {
    console.log(city);
    return this.http.get(
      `${this.apiUrl}weather?q=${city}&units=${metric}&APPID=${this.apiKey}`)
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)
      );
  }


  getCityForecast(city: string, metric: 'metric'): Observable<any> {
    return this.http.get(
      `${this.apiUrl}forecast?q=${city}&units=${metric}&APPID=${this.apiKey}`)
      .pipe(
        map((data: any) => {
          const forecast: any[] = [];
          // tslint:disable-next-line: prefer-for-of
//           let count = 0;
//           for (let item of data.list) {
// count ++;

//           }
          for (let i = 0; i < data.list.length; i = i + 8) {
            forecast.push(data.list[i + 1]);
          }
          console.log('forecast: ', forecast);
          return forecast;
        }),
        catchError(this.handleError)
      );

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Unknown city, try a different name');
  }
}
