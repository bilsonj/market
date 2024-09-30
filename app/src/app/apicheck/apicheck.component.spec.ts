import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicheckComponent } from './apicheck.component';

describe('ApicheckComponent', () => {
  let component: ApicheckComponent;
  let fixture: ComponentFixture<ApicheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApicheckComponent]
    });
    fixture = TestBed.createComponent(ApicheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
