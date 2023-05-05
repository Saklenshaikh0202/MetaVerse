import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesettingsComponent } from './themesettings.component';

describe('ThemesettingsComponent', () => {
  let component: ThemesettingsComponent;
  let fixture: ComponentFixture<ThemesettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
