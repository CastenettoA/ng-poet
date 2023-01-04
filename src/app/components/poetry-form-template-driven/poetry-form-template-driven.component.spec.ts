import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryFormTemplateDrivenComponent } from './poetry-form-template-driven.component';

describe('PoetryFormTemplateDrivenComponent', () => {
  let component: PoetryFormTemplateDrivenComponent;
  let fixture: ComponentFixture<PoetryFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoetryFormTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetryFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
