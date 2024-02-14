import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voter } from '../elections/model/voter.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private voterUrl: string = 'http://localhost:8080/voters';

  constructor(private http: HttpClient) { }

  public getVoters() {
    return this.http.get<Voter[]>(`${this.voterUrl}/all`).pipe(
      catchError(this.handleError<Voter[]>('getVoters', []))
    )
  }

  public createNewVoter(voter: Voter) {
    return this.http.post<Voter>(`${this.voterUrl}/add`, voter).pipe(
      catchError(this.handleError<Voter[]>('createNewVoter', []))
    )
  }

  private handleError<T>(_operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
