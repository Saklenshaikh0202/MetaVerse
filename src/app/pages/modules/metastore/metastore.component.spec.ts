import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetastoreComponent } from './metastore.component';

describe('MetastoreComponent', () => {
  let component: MetastoreComponent;
  let fixture: ComponentFixture<MetastoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetastoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetastoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
