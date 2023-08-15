import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentUpdateComponent } from './pages/student-update/student-update.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './services/students.service';
import { StudentsDataSource } from './services/students.dataSource';
import { StudentDeleteComponent } from './pages/student-delete/student-delete.component';
import { StudentPopupComponent } from './pages/student-popup/student-popup.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    StudentRegistrationComponent,
    HomeComponent,
    StudentUpdateComponent,
    AboutComponent,
    StudentDeleteComponent,
    StudentPopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule


  ],
  providers: [StudentsService, StudentsDataSource],
  bootstrap: [AppComponent],
})
export class AppModule { }
