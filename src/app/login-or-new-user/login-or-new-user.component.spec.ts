import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrNewUserComponent } from './login-or-new-user.component';

describe('LoginOrNewUserComponent', () => {
  let component: LoginOrNewUserComponent;
  let fixture: ComponentFixture<LoginOrNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOrNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
