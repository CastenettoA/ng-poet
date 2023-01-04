import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';
import { Poetry } from 'src/app/interfaces/poetry';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  poetries: Poetry[] = [];

  constructor(
    private poetryService: PoetryService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getPoetries();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getPoetries() {
    this.poetryService.getPoetries().subscribe((poetries)=> {
      this.poetries = poetries.data;
    })
  }

  editPoetry(_id: string) {

  }

  deletePoetry(_id: string) {
    this.poetryService.deletePoetry(_id).subscribe((res)=> {
      if(res.data.deletedCount) {
        // successfull delete. Refresh poetries [] and display snackBar
        this.getPoetries();
        this.openSnackBar(`Poetry succesfully deleted`, 'close')
      }
    });
  }

}
