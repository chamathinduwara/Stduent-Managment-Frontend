import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StduentDetailsComponent } from './stduent-details.component';

describe('StduentDetailsComponent', () => {
  let component: StduentDetailsComponent;
  let fixture: ComponentFixture<StduentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StduentDetailsComponent]
    });
    fixture = TestBed.createComponent(StduentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
