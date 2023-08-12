import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPendingComponent } from './button-pending.component';

describe('ButtonPendingComponent', () => {
  let component: ButtonPendingComponent;
  let fixture: ComponentFixture<ButtonPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
