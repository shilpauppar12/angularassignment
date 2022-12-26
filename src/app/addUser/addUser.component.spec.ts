import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addUserComponent } from './addUser.component';

describe('NewuserComponent', () => {
  let component: addUserComponent;
  let fixture: ComponentFixture< addUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  addUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( addUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
