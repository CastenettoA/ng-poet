import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoetryComponent } from './edit-poetry.component';

describe('EditPoetryComponent', () => {
  let component: EditPoetryComponent;
  let fixture: ComponentFixture<EditPoetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
