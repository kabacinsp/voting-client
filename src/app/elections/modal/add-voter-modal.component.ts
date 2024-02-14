import { Component, ElementRef, HostListener } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { Voter } from '../model/voter.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediatorService } from '../../services/mediator.service';

@Component({
  selector: '[appVoterDialog]',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-voter-modal.component.html',
  styleUrl: './add-voter-modal.component.css'
})
export class AddVoterModalComponent {

  voter: Voter;

  constructor(private host: ElementRef, private voterService: VoterService, private mediator: MediatorService) {
    this.voter = new Voter();
    this.voter.voted = false
  }

  showModal() {
    this.host.nativeElement.showModal();
  }

  close() {
    this.element.close([]);
  }

  private get element() {
    return this.host.nativeElement;
  }

  onSubmit() {
    if (!this.voter.name) return;
    this.voterService.createNewVoter(this.voter).subscribe(() => {
      this.close();
      this.mediator.sendUpdateVoters("Voter");
    });
  }

  @HostListener('click', ['$event'])
  onDialogClick(event: MouseEvent) {
    if ((event.target as any).nodeName === 'DIALOG') {
      this.close();
    }
  }
}