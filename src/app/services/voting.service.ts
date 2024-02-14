import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private voterUrl: string = 'http://localhost:8080/voting';

  constructor(private http: HttpClient) { }

  public vote(voter: number, candidate: number) {
    return this.http.get(`${this.voterUrl}/vote`, {
      params: {
        voter: voter,
        candidate: candidate
      },
      observe: 'response'
    })
  }
}
