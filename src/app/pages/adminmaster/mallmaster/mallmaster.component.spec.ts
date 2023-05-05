import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallmasterComponent } from './mallmaster.component';

describe('MallmasterComponent', () => {
  let component: MallmasterComponent;
  let fixture: ComponentFixture<MallmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
