import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TearmsandconditionsComponent } from './tearmsandconditions.component';

describe('TearmsandconditionsComponent', () => {
  let component: TearmsandconditionsComponent;
  let fixture: ComponentFixture<TearmsandconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TearmsandconditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TearmsandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
