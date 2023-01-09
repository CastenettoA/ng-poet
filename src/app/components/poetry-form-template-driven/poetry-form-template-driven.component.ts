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

  /**
   * 1. add poetry to db
   * 2. inform user with snackBar
   * 3. clear the form (@todo: when cleared the form is red, it's not beautyfull.)
   */
  onSubmit() {
    this.submitted = true;
    this.poetryService.addPoetries(this.model)
      .subscribe((msg:any)=> {
        if(msg.res) {
          // poetry inseterd succesfully. Send feedback to user
          this.openSnackBar(msg.res, 'close')
          this.model = new Poetry(undefined,'','','');
        }
      });
  }

  // add a sample poetry to db
  addTestPoetry() {
    const c = 'Di ciò che posso essere io per me, non solo non potete saper nulla voi, ma nulla neppure io stesso.';
    const testPoetry:Poetry = {
      _id: undefined, title: 'Lo Sconosciuto', author: 'Luigi Pirandello', content: c
    };

    this.poetryService.addPoetries(testPoetry)
      .subscribe((msg:any)=> {
        if(msg.res) {
          // poetry inseterd succesfully. Send feedback to user
          this.openSnackBar('La poesia di test è stata aggiunta.', 'ok')
        }
      });
  }
}
