import {Injectable} from "@angular/core"
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { StudentInterface } from "../interfaces/student-interface";
import {BehaviorSubject} from "rxjs";
import { Observable } from 'rxjs';
import { StudentsService } from "./students.service";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";



@Injectable()
export class StudentsDataSource extends MatTableDataSource<StudentInterface> {
    students$ = new BehaviorSubject<StudentInterface[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);

    constructor(private studentsService: StudentsService) {
        super();
    }

    // connect() : Observable<StudentInterface[]> {
    //     return this.students$.asObservable();
    // }

    // override disconnect(collectionViewer: CollectionViewer): void {
    //     this.students$.complete();
    // }

    loadStudents( ):void {
        this.isLoading$.next(true);
        this.studentsService.fetchStudents().subscribe((students) => {
            this.students$.next(students);
            this.isLoading$.next(false);
        });
    }
}