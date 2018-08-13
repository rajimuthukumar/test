import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormCreationComponent } from './new-form-creation.component';

describe('NewFormCreationComponent', () => {
  let component: NewFormCreationComponent;
  let fixture: ComponentFixture<NewFormCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
