import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientprofilrComponent } from './patientprofilr.component';

describe('PatientprofilrComponent', () => {
  let component: PatientprofilrComponent;
  let fixture: ComponentFixture<PatientprofilrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientprofilrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientprofilrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
