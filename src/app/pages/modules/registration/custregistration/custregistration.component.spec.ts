import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustregistrationComponent } from './custregistration.component';

describe('CustregistrationComponent', () => {
  let component: CustregistrationComponent;
  let fixture: ComponentFixture<CustregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
