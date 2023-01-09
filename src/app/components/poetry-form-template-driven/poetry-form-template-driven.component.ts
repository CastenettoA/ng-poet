import { Component,  } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Poetry } from 'src/app/interfaces/poetry';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-poetry-form-template-driven',
  templateUrl: './poetry-form-template-driven.component.html',
  styleUrls: ['./poetry-form-template-driven.component.scss']
})

export class PoetryFormTemplateDrivenComponent {
  model = new Poetry(undefined,'','','');
  submitted = false;

  constructor(
    private router:Router,
    private poetryService: PoetryService,
    private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    this.submitted = true;
    this.poetryService.addPoetries(this.model)
      .subscribe((msg:any)=> {
        if(msg.res) {
          // poetry inseterd succesfully. Send feedback to user
          this.openSnackBar(msg.res, 'close')
          this.model = new Poetry(undefined,'','','');
          // todo: clean form after submit
        }
      });
  }
}
