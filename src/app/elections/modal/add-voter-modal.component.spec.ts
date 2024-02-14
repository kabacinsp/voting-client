import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoterModalComponent } from './add-voter-modal.component';

describe('FormModalComponent', () => {
  let component: AddVoterModalComponent;
  let fixture: ComponentFixture<AddVoterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVoterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVoterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
