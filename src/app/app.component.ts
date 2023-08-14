import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: StudentsService) {
    this.service.getDate().subscribe(data => {
      console.log(data)
    })
  }
}
