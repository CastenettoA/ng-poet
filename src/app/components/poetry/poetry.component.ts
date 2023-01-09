import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poetry } from 'src/app/interfaces/poetry';
import { PoetryService } from 'src/app/services/poetry.service';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss']
})
export class PoetryComponent implements OnInit {
  current_id: string = '';
  current_poetry: Poetry[]|undefined = undefined;

  constructor(
    private poetryService: PoetryService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.current_id = params['_id'] })
    this.poetryService.getPoetries(this.current_id).subscribe((poetry:Poetry[])=> {
      this.current_poetry = poetry
      console.log(this.current_poetry)
      // 63b5475563a6931595ffffd7
    });
  }
}
