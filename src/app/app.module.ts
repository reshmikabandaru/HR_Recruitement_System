import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';

import { ApplicantDetailsModalComponent } from './applicant-details-modal/applicant-details-modal.component';
import { ViewComponent } from './view/view.component';
import { AddApplicantModalComponent } from './add-applicant-modal/add-applicant-modal.component';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
   ViewComponent,
    ApplicantDetailsModalComponent,
    AddApplicantModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
     MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
