import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoetryFormReactiveComponent } from './edit-poetry-form-reactive.component';

describe('EditPoetryFormReactiveComponent', () => {
  let component: EditPoetryFormReactiveComponent;
  let fixture: ComponentFixture<EditPoetryFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoetryFormReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPoetryFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
