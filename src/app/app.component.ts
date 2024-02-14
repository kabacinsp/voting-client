import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidateComponent } from './elections/table/candidate/candidate.component';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './elections/table/voter/voter.component';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from './elections/vote/vote.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CandidateComponent,
    VoterComponent,
    CommonModule,
    HttpClientModule,
    VoteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'voting-client';
}
