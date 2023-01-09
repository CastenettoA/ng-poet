import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

// import { HomeComponent } from './components/home/home.component';
import { PoetryFormTemplateDrivenComponent } from './components/poetry-form-template-driven/poetry-form-template-driven.component';
import { EditPoetryComponent } from './components/edit-poetry/edit-poetry.component';
import { EditPoetryFormReactiveComponent } from './components/edit-poetry-form-reactive/edit-poetry-form-reactive.component';
import { PoetryComponent } from './components/poetry/poetry.component';
import { AddPoetryComponent } from './components/add-poetry/add-poetry.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPoetryComponent,
    PoetryFormTemplateDrivenComponent,
    EditPoetryComponent,
    EditPoetryFormReactiveComponent,
    PoetryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    // material
    // icon list https://stackoverflow.com/questions/50637666/where-do-i-find-a-list-of-all-mat-icons-angular
    MatSliderModule, MatIconModule, MatSnackBarModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatMenuModule, MatButtonModule, MatFormFieldModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
