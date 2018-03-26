import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoItemComponent } from './novo-item.component';

describe('NovoItemComponent', () => {
  let component: NovoItemComponent;
  let fixture: ComponentFixture<NovoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
