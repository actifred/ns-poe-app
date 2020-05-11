import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { UserFullNamePipe } from '../pipes/user-full-name.pipe';
import { UserManagerService } from '../services/user-manager.service';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent, UserFullNamePipe ],
      providers: [ UserManagerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.currentUser = {
      name: {
        first: 'toto',
        last: 'Titi',
        title: 'Mr'
      },
      picture: {
        thumbnail: '/fake-image'
      },
      email: 'toto@titi.fr',
      login: {
        username: 'toto234'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
