import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoetryComponent } from './add-poetry.component';

describe('AddPoetryComponent', () => {
  let component: AddPoetryComponent;
  let fixture: ComponentFixture<AddPoetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
