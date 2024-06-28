import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-applicant-details-modal',
  templateUrl: './applicant-details-modal.component.html',
  styleUrls: ['./applicant-details-modal.component.css']
})
export class ApplicantDetailsModalComponent {
  @Input() applicant: any;
  @Input() Fields: any[] = []; 

  constructor(public activeModal: NgbActiveModal,
    private route:Router
  ) {}

 
 
    
  
  downloadResume(url: string, filename: string): void {
    // Logic to download the resume
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  }

  close(){
    this.activeModal.close();
  }
}
