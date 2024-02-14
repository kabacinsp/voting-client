import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateModalComponent } from './add-candidate-modal.component';

describe('FormModalComponent', () => {
  let component: AddCandidateModalComponent;
  let fixture: ComponentFixture<AddCandidateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCandidateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCandidateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
