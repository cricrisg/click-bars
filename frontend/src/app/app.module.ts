import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BarDetailComponent } from './components/bar-detail/bar-detail.component';
import { ListaRestaurantesComponent } from './components/lista-restaurantes/lista-restaurantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditReservaComponent } from './components/edit-reserva/edit-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    BarDetailComponent,
    ListaRestaurantesComponent,
    PerfilComponent,
    EditReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
