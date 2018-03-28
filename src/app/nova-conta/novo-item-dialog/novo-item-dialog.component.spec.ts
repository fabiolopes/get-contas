import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoItemDialogComponent } from './novo-item-dialog.component';

describe('NovoItemDialogComponent', () => {
  let component: NovoItemDialogComponent;
  let fixture: ComponentFixture<NovoItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
