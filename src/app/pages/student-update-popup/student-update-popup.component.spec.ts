import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdatePopupComponent } from './student-update-popup.component';

describe('StudentUpdatePopupComponent', () => {
  let component: StudentUpdatePopupComponent;
  let fixture: ComponentFixture<StudentUpdatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentUpdatePopupComponent]
    });
    fixture = TestBed.createComponent(StudentUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
