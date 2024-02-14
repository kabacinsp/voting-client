import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate } from '../../model/candidate.model';
import { CandidateService } from '../../../services/candidate.service';
import { AddCandidateModalComponent } from '../../modal/add-candidate-modal.component';
import { MediatorService } from '../../../services/mediator.service';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [CommonModule, AddCandidateModalComponent],
  templateUrl: './candidate.component.html',
  providers: [CandidateService],
  styleUrl: './candidate.component.css'
})
export class CandidateComponent {

  candidates!: Candidate[];
  constructor(private candidateService: CandidateService, private mediator: MediatorService) { }

  ngOnInit() {
    this.getCandidatesRequest();
    this.mediator.getCandidateUpdate().subscribe(() => { this.getCandidatesRequest() });
  }

  private getCandidatesRequest() {
    this.candidateService.getCandidates().subscribe((candidates) => {
      this.candidates = candidates;
    });
  }
}
