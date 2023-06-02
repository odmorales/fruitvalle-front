import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSuppliersComponent } from './consultar-suppliers.component';

describe('ConsultarSuppliersComponent', () => {
  let component: ConsultarSuppliersComponent;
  let fixture: ComponentFixture<ConsultarSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSuppliersComponent]
    });
    fixture = TestBed.createComponent(ConsultarSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
