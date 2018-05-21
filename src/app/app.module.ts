import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing//rutas
  ],
  providers: [
    appRoutingProviders//configuracion de las rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
