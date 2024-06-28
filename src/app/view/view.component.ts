import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApplicantDetailsModalComponent } from '../applicant-details-modal/applicant-details-modal.component';
import { AddApplicantModalComponent } from '../add-applicant-modal/add-applicant-modal.component';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Values: any[] =
    [
      {
        "fieldid": 20,
        "fieldname": "Round1",
        "valuestore": "Pending"
      },
      {
        "fieldid": 20,
        "fieldname": "Round1",
        "valuestore": "Passed"
      },
      {
        "fieldid": 20,
        "fieldname": "Round1",
        "valuestore": "Failed"
      },
      {
        "fieldid": 21,
        "fieldname": "Round2",
        "valuestore": "Pending"
      },
      {
        "fieldid": 21,
        "fieldname": "Round2",
        "valuestore": "Passed"
      },
      {
        "fieldid": 21,
        "fieldname": "Round2",
        "valuestore": "Failed"
      },
      {
        "fieldid": 22,
        "fieldname": "Round3",
        "valuestore": "Pending"
      },
      {
        "fieldid": 22,
        "fieldname": "Round3",
        "valuestore": "Passed"
      },
      {
        "fieldid": 22,
        "fieldname": "Round3",
        "valuestore": "Failed"
      }
    ]

  Fields: any[] =
    [
      {
        "fieldid": 1,
        "fieldname": "HR Recruitment Software Management System",
        "fieldtype": "Header",
        "sequence": 1,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 2,
        "fieldname": "Add New Applicant",
        "fieldtype": "Button",
        "sequence": 2,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 3,
        "fieldname": "AppRegNo",
        "fieldtype": "Text",
        "sequence": 3,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 4,
        "fieldname": "FirstName",
        "fieldtype": "Text",
        "sequence": 4,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 5,
        "fieldname": "LastName",
        "fieldtype": "Text",
        "sequence": 5,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 6,
        "fieldname": "DOB",
        "fieldtype": "Date",
        "sequence": 6,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 7,
        "fieldname": "HighestDegree",
        "fieldtype": "Text",
        "sequence": 7,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 8,
        "fieldname": "Percentage",
        "fieldtype": "Text",
        "sequence": 8,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 9,
        "fieldname": "Experience",
        "fieldtype": "Text",
        "sequence": 9,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 10,
        "fieldname": "JobRole",
        "fieldtype": "Text",
        "sequence": 10,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 11,
        "fieldname": "SkillSet",
        "fieldtype": "Text",
        "sequence": 11,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 12,
        "fieldname": "Certification",
        "fieldtype": "Text",
        "sequence": 12,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 13,
        "fieldname": "CurrentLocation",
        "fieldtype": "Text",
        "sequence": 13,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 14,
        "fieldname": "PrefferedLocation",
        "fieldtype": "Text",
        "sequence": 14,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 15,
        "fieldname": "Availability",
        "fieldtype": "Text",
        "sequence": 15,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 16,
        "fieldname": "Email",
        "fieldtype": "Text",
        "sequence": 16,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 17,
        "fieldname": "NoticePeriod",
        "fieldtype": "Text",
        "sequence": 17,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 18,
        "fieldname": "ServingPeriod",
        "fieldtype": "Text",
        "sequence": 18,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 19,
        "fieldname": "Resume",
        "fieldtype": "Link",
        "sequence": 19,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 20,
        "fieldname": "Round1",
        "fieldtype": "DropDown",
        "sequence": 20,
        "submoduleid": 1,
        "valuesholder": "Pending,Passed,Failed",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 21,
        "fieldname": "Round2",
        "fieldtype": "DropDown",
        "sequence": 21,
        "submoduleid": 1,
        "valuesholder": "Pending,Passed,Failed",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 22,
        "fieldname": "Round3",
        "fieldtype": "DropDown",
        "sequence": 22,
        "submoduleid": 1,
        "valuesholder": "Pending,Passed,Failed",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 23,
        "fieldname": "Action",
        "fieldtype": "Text",
        "sequence": 23,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 24,
        "fieldname": "View Details",
        "fieldtype": "Button",
        "sequence": 24,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 25,
        "fieldname": "Save",
        "fieldtype": "Button",
        "sequence": 25,
        "submoduleid": 1,
        "valuesholder": "",
        "rolecode": "HR",
        "isactive": true
      },
      {
        "fieldid": 50,
        "fieldname": "Remove",
        "fieldtype": "Button",
        "sequence": 26,
        "submoduleid": 1,
        "valuesholder": null,
        "rolecode": "HR",
        "isactive": true
      }
    ]

  Applicants: any[] = [
    {
      appregno: 1,
      firstname: "Lavanya",
      lastname: "Varma",
      dob: "2001-07-31",
      highestdegree: "B.TECH",
      percentage: 82,
      experience: 0,
      jobrole: "Developer",
      skillset: "Java-Spring-Jsp-MySql",
      certification: "Yes",
      currentlocation: "Vizag",
      prefferedlocation: "VIZAG",
      availability: "Pending",
      email: "lavanya@gmail.com",
      noticeperiod: "1month",
      servingperiod: "1 month",
      applicantresume: "",
      round1: null,
      round2: null,
      round3: null
    },
    {
      appregno: 2,
      firstname: "Nikhila",
      lastname: "Nikki",
      dob: "2002-11-06",
      highestdegree: "B.TECH",
      percentage: 79,
      experience: 1,
      jobrole: "Developer",
      skillset: "Java-Struts-Jsp",
      certification: "No",
      currentlocation: "Chennai",
      prefferedlocation: "VIZAG",
      availability: "AvailableLater",
      email: "nikhila@gmail.com",
      noticeperiod: "2 months",
      servingperiod: "1 month",
      applicantresume:"",
      round1: null,
      round2: null,
      round3: null
    },
    {
      appregno: 3,
      firstname: "Reshmika",
      lastname: "Bandaru",
      dob: "2003-10-08",
      highestdegree: "B.TECH",
      percentage: 96,
      experience: 0,
      jobrole: "Developer",
      skillset: "Java-Spring-Angular-MySql",
      certification: "No",
      currentlocation: "Hyderabad",
      prefferedlocation: "VIZAG",
      availability: "ImmediateJoinee",
      email: "reshmika@gamil.com",
      noticeperiod: "None",
      servingperiod: "None",
      applicantresume:"",
      round1: null,
      round2: null,
      round3: null
    },
    {
      appregno: 4,
      firstname: "Jyothi",
      lastname: "Julie",
      dob: "2003-05-02",
      highestdegree: "B.TECH",
      percentage: 89,
      experience: 1,
      jobrole: "Developer",
      skillset: "C++-Jsp-MySql",
      certification: "No",
      currentlocation: "Srikakulam",
      prefferedlocation: "VIZAG",
      availability: "ImmediateJoinee",
      email: "jyothi@gmail.com",
      noticeperiod: "None",
      servingperiod: "None",
      applicantresume: "",
      round1: "Passed",
      round2: null,
      round3: null
    },

  ];

  constructor(private modalService: NgbModal,
  
  ) { }
  ngOnInit(): void {

  }
  

  openDetailsModal(applicant: any[]) {
    
    console.log(applicant);
   
    const modalRef = this.modalService.open(ApplicantDetailsModalComponent, { size: 'lg' , centered: true,
      backdrop: false});
    modalRef.componentInstance.applicant = applicant;
    modalRef.componentInstance.Fields= this.Fields;
   // console.log(modalRef.componentInstance.Fields);
    

  }
  openAddApplicantModal() {
    const modalRef = this.modalService.open(AddApplicantModalComponent, { size: 'lg' });
    modalRef.componentInstance.Fields = this.Fields; // Pass the Fields array to the modal component
  }
  


  getFieldValues(fieldName: string): string[] {

    const field: string[] = this.Values.filter(v => v.fieldname === fieldName).map(v => v.valuestore);
   
    return field;
  }




  saveApplicant(index: number) {
    console.log('Save applicant:', this.Applicants[index]);
  
  }

  removeApplicant(index: number) {
    console.log('Remove applicant:', this.Applicants[index]);
  
    this.Applicants.splice(index, 1); // Example: Remove from array
  }


  downloadResume(base64String: string, filename: string) {
    // Decode the Base64 string
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  shouldDisplayHeader(field: any): boolean {
    const displayFields = ['AppRegNo', 'FirstName', 'LastName', 'Resume', 'Round1', 'Round2', 'Round3', 'Action'];
    return displayFields.includes(field.fieldname);
  }


}


// export interface Applicant {
//   appregno?: string , 
//       firstname?: string , 
//       lastname?: string , 
//       dob?: string , 
//       highestdegree?: string , 
//       percentage?: string , 
//       experience?: string,
//       jobrole?: string , 
//       skillset?: string , 
//       certification?: string , 
//       currentlocation?: string , 
//       preferedlocation?: string , 
//       availability?: string , 
//       email?: string , 
//       noticeperiod?: string , 
//       servingperiod?: string , 
//       applicantresume?: string , 
//       round1?: string , 
//       round2?: string , 
//       round3?: string , 
// }
