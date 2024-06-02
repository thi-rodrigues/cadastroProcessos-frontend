import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ProcessoCreateComponent } from './view/processo/processo-create/processo-create.component';
import { ProcessoListComponent } from './view/processo/processo-list/processo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, 
  // { path: 'inicio',   component: HomeComponent      },
  // { path: 'teste',    component: AppComponent       },
  { path: 'list',    component: ProcessoListComponent       },
  { path: 'create',    component: ProcessoCreateComponent       },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
