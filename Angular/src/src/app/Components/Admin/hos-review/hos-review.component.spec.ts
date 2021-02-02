import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosReviewComponent } from './hos-review.component';

describe('HosReviewComponent', () => {
  let component: HosReviewComponent;
  let fixture: ComponentFixture<HosReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
