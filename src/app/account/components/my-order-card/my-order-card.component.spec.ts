import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderCardComponent } from './my-order-card.component';

describe('MyOrderCardComponent', () => {
  let component: MyOrderCardComponent;
  let fixture: ComponentFixture<MyOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
