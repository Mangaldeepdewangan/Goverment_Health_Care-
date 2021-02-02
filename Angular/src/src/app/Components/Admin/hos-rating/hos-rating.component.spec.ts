import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosRatingComponent } from './hos-rating.component';

describe('HosRatingComponent', () => {
  let component: HosRatingComponent;
  let fixture: ComponentFixture<HosRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
