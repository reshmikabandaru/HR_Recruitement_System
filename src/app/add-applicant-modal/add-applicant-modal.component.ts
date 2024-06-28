import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-applicant-modal',
  templateUrl: './add-applicant-modal.component.html',
  styleUrls: ['./add-applicant-modal.component.css']
})
export class AddApplicantModalComponent implements OnInit {

  constructor(private modalRef: NgbModalRef) { }

  ngOnInit(): void {
  }

  close() {
    this.modalRef.close(); // Close the modal
  }

  saveApplicant() {
    // Logic to save applicant details goes here
    // You can emit an event or call a service to save the data
    this.modalRef.close(); // Close the modal after saving
  }
}
