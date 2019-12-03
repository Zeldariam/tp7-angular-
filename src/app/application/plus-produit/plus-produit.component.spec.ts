import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusProduitComponent } from './plus-produit.component';

describe('PlusProduitComponent', () => {
  let component: PlusProduitComponent;
  let fixture: ComponentFixture<PlusProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
