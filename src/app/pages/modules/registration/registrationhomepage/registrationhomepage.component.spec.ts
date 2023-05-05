import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationhomepageComponent } from './registrationhomepage.component';

describe('RegistrationhomepageComponent', () => {
  let component: RegistrationhomepageComponent;
  let fixture: ComponentFixture<RegistrationhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
