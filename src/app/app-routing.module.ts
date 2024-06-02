import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoCreateComponent } from './view/processo/processo-create/processo-create.component';
import { ProcessoListComponent } from './view/processo/processo-list/processo-list.component';
import { ProcessoEditComponent } from './view/processo/processo-edit/processo-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  { path: 'list',    component: ProcessoListComponent       },
  { path: 'create',    component: ProcessoCreateComponent   },
  { path: 'edit/:id',    component: ProcessoEditComponent       },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
