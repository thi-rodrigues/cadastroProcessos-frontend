import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoListComponent } from './view/processo/processo-list/processo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, 
  // { path: 'processo', component: ProcessoFormComponent     },
  // { path: 'inicio',   component: HomeComponent      },
  { path: 'list',    component: ProcessoListComponent       },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
