import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StduentGridComponent } from './components/stduent-grid/stduent-grid.component';
import { StduentDetailsComponent } from './components/stduent-details/stduent-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StduentGridComponent,
    StduentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
