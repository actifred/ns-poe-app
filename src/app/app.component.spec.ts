import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LiensService } from './services/liens.service';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { FormLienComponent } from './form-lien/form-lien.component';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EnteteComponent,
        MenuComponent,
        FormLienComponent,
        MajusculePipe
      ],
      providers: [ 
        LiensService
      ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Nat Poe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.titre).toEqual('Nat Poe');
  });

  it('should render welcome message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.entete').innerText).toContain('Bienvenue, la date actuelle');
  });

  it('should show form on button click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.toggleFormVisibility();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nat-form-lien > h3').innerText).toEqual('Ajouter un lien');
  });
});
