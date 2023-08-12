import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardButtonLinkComponent } from './dashboard-button-link.component';

describe('DashboardButtonLinkComponent', () => {
  let component: DashboardButtonLinkComponent;
  let fixture: ComponentFixture<DashboardButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardButtonLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
