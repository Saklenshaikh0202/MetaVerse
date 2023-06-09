import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMpinComponent } from './registration-mpin.component';

describe('RegistrationMpinComponent', () => {
  let component: RegistrationMpinComponent;
  let fixture: ComponentFixture<RegistrationMpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationMpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationMpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
