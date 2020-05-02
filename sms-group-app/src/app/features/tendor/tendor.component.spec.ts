import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendorComponent } from './tendor.component';

describe('TendorComponent', () => {
  let component: TendorComponent;
  let fixture: ComponentFixture<TendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
