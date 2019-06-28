import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  url = 'http://localhost:3002';
  activity: any;

  constructor( private http: HttpClient) {

  }

// GET all the activities from the server
    getAllActivities(): Observable<any[]> {
      const url = `${this.url}/activities`;
      return this.http.get<any[]> (url)
      .pipe(
        tap(activities => console.log(`fetched activities`, activities)),
        catchError(this.handleError<any>(`getAllActivities`))
      );
    }

// GET activity by id from the server
    getActivity(id: number): Observable<any> {
      const url = `${this.url}/activities`;
      return this.http.get<any> (url)
      .pipe(
        tap(activity => console.log(`fetched activity id = ${id}`, activity)),
        catchError(this.handleError<any>(`getActivity id=${id}`))
      );
    }

  // PUT: update activity on the server by id
  updateActivity(activity: any): Observable<any> {
    const url = `${this.url}/activities/${activity.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, activity, httpOptions)
    .pipe(
      tap(updatedActivity => console.log(`updatedActivity activity id=${activity.id}`, updatedActivity)),
      catchError(this.handleError<any>(`updatedActivity`))
    );
  }


  // POST: add a new mood to the server
  insertActivity(activity: any): Observable<any> {
    const url = `${this.url}/activities`;
    console.log('wobble activity', activity);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any> (url, activity, httpOptions)
    .pipe(
      tap((newActivity) => console.log(`inserted activity id=$newActivity.id`)),
      catchError(this.handleError<any>('inserted Activity'))
    );
  }

  // DELETE amood from the server by id
  deleteActivity(id: number): Observable<any> {
    const url = `${this.url}/activities/${id}`;
    return this.http.delete<any> (url)
  .pipe(
    catchError(this.handleError<any>(`deletedActivity`))
  );
}

    public handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
  }

