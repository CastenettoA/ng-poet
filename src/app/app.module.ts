import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddPoetryComponent } from './add-poetry/add-poetry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material comp.
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { PoetryFormTemplateDrivenComponent } from './components/poetry-form-template-driven/poetry-form-template-driven.component';
import { EditPoetryComponent } from './edit-poetry/edit-poetry.component';
import { EditPoetryFormReactiveComponent } from './components/edit-poetry-form-reactive/edit-poetry-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPoetryComponent,
    PoetryFormTemplateDrivenComponent,
    EditPoetryComponent,
    EditPoetryFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,

    // material comp.
    // icon list https://stackoverflow.com/questions/50637666/where-do-i-find-a-list-of-all-mat-icons-angular
    MatIconModule, MatSnackBarModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatMenuModule, MatButtonModule, MatFormFieldModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
