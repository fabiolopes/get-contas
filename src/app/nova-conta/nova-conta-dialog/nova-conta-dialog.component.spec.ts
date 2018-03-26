import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaDialogComponent } from './nova-conta-dialog.component';

describe('NovaContaDialogComponent', () => {
  let component: NovaContaDialogComponent;
  let fixture: ComponentFixture<NovaContaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaContaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
