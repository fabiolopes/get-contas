import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPeriodoComponent } from './filtro-periodo.component';

describe('FiltroPeriodoComponent', () => {
  let component: FiltroPeriodoComponent;
  let fixture: ComponentFixture<FiltroPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
