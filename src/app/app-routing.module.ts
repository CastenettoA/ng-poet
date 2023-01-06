import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoetryComponent } from './add-poetry/add-poetry.component';
import { HomeComponent } from './components/home/home.component';
import { EditPoetryComponent } from './edit-poetry/edit-poetry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-poetry', component: AddPoetryComponent },
  { path: 'edit-poetry/:_id', component: EditPoetryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
