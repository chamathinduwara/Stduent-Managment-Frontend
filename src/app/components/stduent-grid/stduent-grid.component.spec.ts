import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StduentGridComponent } from './stduent-grid.component';

describe('StduentGridComponent', () => {
  let component: StduentGridComponent;
  let fixture: ComponentFixture<StduentGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StduentGridComponent]
    });
    fixture = TestBed.createComponent(StduentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
