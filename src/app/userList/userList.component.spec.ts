import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userListComponent } from './userList.component';

describe('PeopleaddedComponent', () => {
  let component: userListComponent;
  let fixture: ComponentFixture<userListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
