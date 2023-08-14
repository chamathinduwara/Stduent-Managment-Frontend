import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentUpdateComponent } from './pages/student-update/student-update.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path: ""
  },
  {
    component:StudentRegistrationComponent,
    path: "registration"
  },
  {
    component:StudentUpdateComponent,
    path: "update"
  },
  {
    component:AboutComponent,
    path: "about"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
