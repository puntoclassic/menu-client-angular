import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMieiOrdiniPageComponent } from './i-miei-ordini-page.component';

describe('IMieiOrdiniPageComponent', () => {
  let component: IMieiOrdiniPageComponent;
  let fixture: ComponentFixture<IMieiOrdiniPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMieiOrdiniPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMieiOrdiniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
