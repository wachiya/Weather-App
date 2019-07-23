import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoodsService {

  url = 'http://localhost:3002';
  mood: any;

  constructor(private http: HttpClient) {
  }

  // GET all the moods frm the server
  getAllMoods(): Observable<any[]> {
    const url = `${this.url}/moods`;
    return this.http.get<any[]>(url)
      .pipe(

        tap(moods => console.log(`fetched moods`, moods)),
        catchError(this.handleError<any>(`getAllMoods`))
      );
  }

  // GET mood by id from the server
  getMood(id: number): Observable<any[]> {
    const url = `${this.url}/moods/${id}`;
    return this.http.get<any>(url)
      .pipe(
        tap(mood => console.log(`fetched mood id=${id}`, mood)),
        catchError(this.handleError<any>(`getMood id=${id}`))
      );
  }

  // PUT: update mood on the server by id
  updateMood(mood: any): Observable<any> {
    const url = `${this.url}/moods/${mood.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(url, mood, httpOptions)
      .pipe(
        tap(updatedMood => console.log(`updatedMood mood id=${mood.id}`, updatedMood)),
        catchError(this.handleError<any>(`updatedMood`))
      );
  }

  // POST: add a new mood to the server
  insertMood(mood: any): Observable<any[]> {
    const url = `${this.url}/moods`;
    console.log('hfhfhfff', mood);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(url, mood, httpOptions)
      .pipe(
        tap((newMood) => console.log(`inserted mood id=$newMood.id`)),
        catchError(this.handleError<any>('insertedMood'))
      );
  }


  // DELETE amood from the server by id
  deleteMood(id: number): Observable<any> {
    const url = `${this.url}/moods/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError<any>(`deletedMood`))
      );
  }


  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
