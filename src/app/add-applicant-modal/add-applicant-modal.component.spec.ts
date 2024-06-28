import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicantModalComponent } from './add-applicant-modal.component';

describe('AddApplicantModalComponent', () => {
  let component: AddApplicantModalComponent;
  let fixture: ComponentFixture<AddApplicantModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApplicantModalComponent]
    });
    fixture = TestBed.createComponent(AddApplicantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
