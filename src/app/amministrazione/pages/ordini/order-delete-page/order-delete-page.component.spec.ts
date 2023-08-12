import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeletePageComponent } from './order-delete-page.component';

describe('OrderDeletePageComponent', () => {
  let component: OrderDeletePageComponent;
  let fixture: ComponentFixture<OrderDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
