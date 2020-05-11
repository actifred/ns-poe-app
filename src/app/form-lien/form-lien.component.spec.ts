import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLienComponent } from './form-lien.component';
import { LiensService } from '../services/liens.service';
import { FormsModule } from '@angular/forms';

describe('FormLienComponent', () => {
  let component: FormLienComponent;
  let fixture: ComponentFixture<FormLienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLienComponent ],
      imports: [ FormsModule ],
      providers: [ LiensService ]
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
