import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseAppointmentsComponent } from './date-wise-appointments.component';

describe('DateWiseAppointmentsComponent', () => {
  let component: DateWiseAppointmentsComponent;
  let fixture: ComponentFixture<DateWiseAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
