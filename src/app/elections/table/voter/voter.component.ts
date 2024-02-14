import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterService } from '../../../services/voter.service';
import { Voter } from '../../model/voter.model';
import { AddVoterModalComponent } from '../../modal/add-voter-modal.component';
import { MediatorService } from '../../../services/mediator.service';

@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [CommonModule, AddVoterModalComponent],
  templateUrl: './voter.component.html',
  providers: [VoterService],
  styleUrl: './voter.component.css'
})
export class VoterComponent {

  voters!: Voter[];
  constructor(private voterService: VoterService, private mediator: MediatorService) { }

  ngOnInit(): void {
    this.getVotersRequest();
    this.mediator.getVotersUpdate().subscribe(() => { this.getVotersRequest() });
  }

  public getVotersRequest() {
    this.voterService.getVoters().subscribe((voters) => {
      this.voters = voters;
    });
  }
}

