import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovideSecComponent } from './covide-sec.component';

describe('CovideSecComponent', () => {
  let component: CovideSecComponent;
  let fixture: ComponentFixture<CovideSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovideSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovideSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
