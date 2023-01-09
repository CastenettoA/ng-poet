import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.getPoetries();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getPoetries() {
    this.poetryService.getPoetries().subscribe((poetries)=> {
      this.poetries = poetries;
    })
  }

  // send user to edit poetry page
  goToUpdatePage(_id: string) {
    this.router.navigate([`/edit-poetry/${_id}`])
  }

  deletePoetry(_id: string) {
    this.poetryService.deletePoetries(_id).subscribe((msg)=> {
      if(msg.res) {
         this.getPoetries();
         this.openSnackBar(msg.res, 'close')
      }
    });
  }
}
