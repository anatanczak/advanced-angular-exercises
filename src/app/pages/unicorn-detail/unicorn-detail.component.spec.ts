import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornDetailComponent } from './unicorn-detail.component';

describe('UnicornDetailComponent', () => {
  let component: UnicornDetailComponent;
  let fixture: ComponentFixture<UnicornDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicornDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
