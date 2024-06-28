import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDetailsModalComponent } from './applicant-details-modal.component';

describe('ApplicantDetailsModalComponent', () => {
  let component: ApplicantDetailsModalComponent;
  let fixture: ComponentFixture<ApplicantDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantDetailsModalComponent]
    });
    fixture = TestBed.createComponent(ApplicantDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
