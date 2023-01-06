import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, takeUntil, takeWhile} from 'rxjs/operators';
import { Poetry } from 'src/app/interfaces/poetry';
import { PoetryService } from 'src/app/services/poetry.service';


@Component({
  selector: 'app-edit-poetry-form-reactive',
  templateUrl: './edit-poetry-form-reactive.component.html',
  styleUrls: ['./edit-poetry-form-reactive.component.scss']
})

export class EditPoetryFormReactiveComponent implements OnChanges {
  // https://www.danywalls.com/how-to-share-data-between-components-in-angular
  // see this to improve component sharing.
  @Input() poetry?:Poetry;

  constructor(
    private poetryService: PoetryService,
    private _snackBar: MatSnackBar
  ) {}


  // create form to edit current poetry
  editPoetryForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  // init form inputs with _poetry data value
  initFormValues() {
   this.editPoetryForm.patchValue({
    title: this.poetry?.title,
    author: this.poetry?.author,
    content: this.poetry?.content,
   });
  }

  ngOnChanges(changes: SimpleChanges) {
    // update form with the poetry values
    if(changes['poetry'].currentValue) 
      this.initFormValues();
  }

  onSubmit() {
    // send edit request
    let poetry = this.editPoetryForm.value as Poetry;
    this.poetryService.editPoetries(this.poetry?._id, poetry)
      .subscribe((res:any)=> {
        console.log('result of edit', res)
        // if(res.data._id) {
        //   // poetry inseterd succesfully. Send feedback to user
        //   this.openSnackBar(`Poetry with title "${this.editPoetryForm.value.title}" was inserted succesfully`, 'close')
        // }
      });
  }
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

}
