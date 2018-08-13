import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndUpdateComponent } from './search-and-update.component';

describe('SearchAndUpdateComponent', () => {
  let component: SearchAndUpdateComponent;
  let fixture: ComponentFixture<SearchAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
