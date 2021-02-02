import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProComponent } from './patient-pro.component';

describe('PatientProComponent', () => {
  let component: PatientProComponent;
  let fixture: ComponentFixture<PatientProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
