import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatProfileComponent } from './pat-profile.component';

describe('PatProfileComponent', () => {
  let component: PatProfileComponent;
  let fixture: ComponentFixture<PatProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
