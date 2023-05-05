import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncustregistrationComponent } from './noncustregistration.component';

describe('NoncustregistrationComponent', () => {
  let component: NoncustregistrationComponent;
  let fixture: ComponentFixture<NoncustregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoncustregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoncustregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
