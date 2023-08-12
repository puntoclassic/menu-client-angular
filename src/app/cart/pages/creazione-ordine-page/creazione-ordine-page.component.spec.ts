import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneOrdinePageComponent } from './creazione-ordine-page.component';

describe('CreazioneOrdinePageComponent', () => {
  let component: CreazioneOrdinePageComponent;
  let fixture: ComponentFixture<CreazioneOrdinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreazioneOrdinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazioneOrdinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
