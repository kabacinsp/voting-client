import { Component, ElementRef, HostListener } from '@angular/core';
import { Candidate } from '../model/candidate.model';
import { CandidateService } from '../../services/candidate.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediatorService } from '../../services/mediator.service';

export interface PromptModel {
  title: string;
  question: string;
}

@Component({
  selector: '[appCandidateDialog]',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-candidate-modal.component.html',
  styleUrl: './add-candidate-modal.component.css'
})
export class AddCandidateModalComponent {

  candidate: Candidate;
  constructor(private host: ElementRef, private candidateService: CandidateService, private mediator: MediatorService) {
    this.candidate = new Candidate();
  }

  showModal() {
    this.host.nativeElement.showModal();
  }

  close() {
    this.element.close();
  }

  private get element() {
    return this.host.nativeElement;
  }

  onSubmit() {
    if (!this.candidate.name) return;
    this.candidateService.createNewCandidate(this.candidate).subscribe(() => {
      this.close();
      this.mediator.sendUpdateCandidate("Candidate");
    });
  }

  @HostListener('click', ['$event'])
  onDialogClick(event: MouseEvent) {
    if ((event.target as any).nodeName === 'DIALOG') {
      this.close();
    }
  }
}