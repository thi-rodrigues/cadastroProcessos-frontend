import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './view/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProcessoListComponent } from './view/processo/processo-list/processo-list.component';
import { ProcessoCreateComponent } from './view/processo/processo-create/processo-create.component';

import { NgxMaskModule } from 'ngx-mask';
import { ProcessoEditComponent } from './view/processo/processo-edit/processo-edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeuModalComponent } from './components/modal/meu-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    ProcessoListComponent,
    ProcessoCreateComponent,
    ProcessoEditComponent,
    MeuModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
