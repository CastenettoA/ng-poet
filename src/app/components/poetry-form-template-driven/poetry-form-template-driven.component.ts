import { Component,  } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private poetryService: PoetryService,
    private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    this.submitted = true;
    this.poetryService.addPoetries(this.model)
      .subscribe((res:any)=> {
        if(res.data._id) {
          // poetry inseterd succesfully. Send feedback to user
          this.openSnackBar(`Poetry with title "${this.model.title}" was inserted succesfully`, 'close')
          // todo: clean form after submit
        }
      });
  }
}
