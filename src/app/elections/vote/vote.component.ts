import { Component } from '@angular/core';
import { Voter } from '../model/voter.model';
import { VoterService } from '../../services/voter.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../model/candidate.model';
import { VotingService } from '../../services/voting.service';
import { MediatorService } from '../../services/mediator.service';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vote.component.html',
  providers: [VoterService, CandidateService, VotingService],
  styleUrl: './vote.component.css'
})
export class VoteComponent {

  voters!: Voter[];
  candidates!: Candidate[];
  voterSelected!: number;
  candidateSelected!: number;
  shouldSnackbarBeVisible = false;

  constructor(private voterService: VoterService,
    private candidateService: CandidateService,
    private votingService: VotingService,
    private mediator: MediatorService) { }

  ngOnInit(): void {
    this.getVotersRequest();
    this.getCandidatesRequest();
    this.mediator.getVotersUpdate().subscribe(() => { this.getVotersRequest() });
    this.mediator.getCandidateUpdate().subscribe(() => { this.getCandidatesRequest() });
  }

  onSubmit() {
    if (this.isNaN(this.voterSelected) || this.isNaN(this.candidateSelected)) {
      this.showSnackbar();
      return;
    }
    this.votingService.vote(this.voterSelected, this.candidateSelected).subscribe(() => {
      this.mediator.sendUpdateVoters("Voters");
      this.mediator.sendUpdateCandidate("Candidate");
    });
  }

  private showSnackbar() {
    this.shouldSnackbarBeVisible = true;
    setTimeout(() => {
      this.shouldSnackbarBeVisible = false;
    }, 1000);
  }

  private getVotersRequest() {
    this.voterService.getVoters().subscribe((voters) => {
      this.voters = voters;
    });
  }

  private getCandidatesRequest() {
    this.candidateService.getCandidates().subscribe((candidates) => {
      this.candidates = candidates;
    });
  }

  public isNaN(val: any): boolean { return isNaN(val) }
}