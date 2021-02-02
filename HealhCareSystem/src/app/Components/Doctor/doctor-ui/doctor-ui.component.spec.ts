import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUIComponent } from './doctor-ui.component';

describe('DoctorUIComponent', () => {
  let component: DoctorUIComponent;
  let fixture: ComponentFixture<DoctorUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
