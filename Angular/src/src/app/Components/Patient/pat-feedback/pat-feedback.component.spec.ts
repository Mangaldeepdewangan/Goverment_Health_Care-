import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatFeedbackComponent } from './pat-feedback.component';

describe('PatFeedbackComponent', () => {
  let component: PatFeedbackComponent;
  let fixture: ComponentFixture<PatFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
