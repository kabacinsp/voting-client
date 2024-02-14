import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
  private subjectVoter = new Subject<any>();
  private subjectCandidate = new Subject<any>();
  constructor() { }

  sendUpdateVoters(message: string) {
    this.subjectVoter.next({ text: message });
  }

  getVotersUpdate(): Observable<any> {
    return this.subjectVoter.asObservable();
  }

  sendUpdateCandidate(message: string) {
    this.subjectCandidate.next({ text: message });
  }

  getCandidateUpdate(): Observable<any> {
    return this.subjectCandidate.asObservable();
  }
}
