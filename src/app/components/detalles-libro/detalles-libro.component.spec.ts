import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLibroComponent } from './detalles-libro.component';

describe('DetallesLibroComponent', () => {
  let component: DetallesLibroComponent;
  let fixture: ComponentFixture<DetallesLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
