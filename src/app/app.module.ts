import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MestreComponent } from './mestre/mestre.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    MestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
