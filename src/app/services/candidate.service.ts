import { Injectable } from '@angular/core';
import { Candidate } from '../elections/model/candidate.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidateUrl: string = 'http://localhost:8080/candidates';

  constructor(private http: HttpClient) { }

  public getCandidates() {
    return this.http.get<Candidate[]>(`${this.candidateUrl}/all`).pipe(
      catchError(this.handleError<Candidate[]>('getCandidates', []))
    );
  }

  public createNewCandidate(candidate: Candidate) {
    return this.http.post<Candidate>(`${this.candidateUrl}/add`, candidate).pipe(
      catchError(this.handleError<Candidate[]>('createNewCandidate', []))
    )
  }

  private handleError<T>(_operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
