import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineDetailPageComponent } from './ordine-detail-page.component';

describe('OrdineDetailPageComponent', () => {
  let component: OrdineDetailPageComponent;
  let fixture: ComponentFixture<OrdineDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdineDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdineDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
