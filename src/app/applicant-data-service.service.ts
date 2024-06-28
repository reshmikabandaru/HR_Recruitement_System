import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDataService {

  constructor() { }

  getApplicantFields(): Observable<any> {
    const dummyData = [
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
        null
      ],
      [
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
        null
      ],
      [
        {
          "fieldid": 3,
          "fieldname": "App_Reg_No",
          "fieldtype": "Text",
          "sequence": 3,
          "submoduleid": 1,
          "valuesholder": "",
          "rolecode": "HR",
          "isactive": true
        },
        null
      ],
      [
        {
          "fieldid": 21,
          "fieldname": "Round2",
          "fieldtype": "DropDrown",
          "sequence": 21,
          "submoduleid": 1,
          "valuesholder": "Pending,Passed,Failed",
          "rolecode": "HR",
          "isactive": true
        },
        "Pending"
      ],
      [
        {
          "fieldid": 21,
          "fieldname": "Round2",
          "fieldtype": "DropDrown",
          "sequence": 21,
          "submoduleid": 1,
          "valuesholder": "Pending,Passed,Failed",
          "rolecode": "HR",
          "isactive": true
        },
        "Passed"
      ],
      [
        {
          "fieldid": 21,
          "fieldname": "Round2",
          "fieldtype": "DropDrown",
          "sequence": 21,
          "submoduleid": 1,
          "valuesholder": "Pending,Passed,Failed",
          "rolecode": "HR",
          "isactive": true
        },
        "Failed"
      ],
      [
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
        "Pending"
      ],
      [
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
        "Passed"
      ],
      [
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
        "Failed"
      ],
     
    ];

    return of(dummyData);
  }
}
