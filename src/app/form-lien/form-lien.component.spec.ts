import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLienComponent } from './form-lien.component';

describe('FormLienComponent', () => {
  let component: FormLienComponent;
  let fixture: ComponentFixture<FormLienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
