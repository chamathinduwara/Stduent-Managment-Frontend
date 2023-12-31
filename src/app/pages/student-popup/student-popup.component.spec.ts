import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopupComponent } from './student-popup.component';

describe('StudentPopupComponent', () => {
  let component: StudentPopupComponent;
  let fixture: ComponentFixture<StudentPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPopupComponent]
    });
    fixture = TestBed.createComponent(StudentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
