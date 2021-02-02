import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllHospitalsComponent } from './list-of-all-hospitals.component';

describe('ListOfAllHospitalsComponent', () => {
  let component: ListOfAllHospitalsComponent;
  let fixture: ComponentFixture<ListOfAllHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAllHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAllHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
