import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Poetry } from 'src/app/interfaces/poetry';
import { PoetryService } from 'src/app/services/poetry.service';
@Component({
  selector: 'app-edit-poetry',
  templateUrl: './edit-poetry.component.html',
  styleUrls: ['./edit-poetry.component.scss']
})
export class EditPoetryComponent implements OnInit {
  current_id:string = '';
  poetry!:Poetry;
  poetryObservable!: Observable<any>

  constructor(
    private poetryService: PoetryService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    // getting the _id from route param
    this.route.params.subscribe(params => { this.current_id = params['_id'] })

    // init a Poetry osbervable of current poetry
    this.poetryObservable = this.poetryService.getPoetries(this.current_id);
    this.poetryObservable.subscribe((res)=> {
      this.poetry = res;
    })
  }
}
