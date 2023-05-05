import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationstepsComponent } from './registrationsteps.component';

describe('RegistrationstepsComponent', () => {
  let component: RegistrationstepsComponent;
  let fixture: ComponentFixture<RegistrationstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationstepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
