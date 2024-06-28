import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDetailsModalComponent } from './applicant-details-modal/applicant-details-modal.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '/view', component: ViewComponent } // Adjusted path to include parameter if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
