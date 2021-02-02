import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDocComponent } from './all-doc.component';

describe('AllDocComponent', () => {
  let component: AllDocComponent;
  let fixture: ComponentFixture<AllDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
