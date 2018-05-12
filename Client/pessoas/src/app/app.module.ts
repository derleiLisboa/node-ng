import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CrudPessoasComponent } from './crud-pessoas/crud-pessoas.component';
import { PessoasService } from './pessoas.service';


@NgModule({
  declarations: [
    AppComponent,
    CrudPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
