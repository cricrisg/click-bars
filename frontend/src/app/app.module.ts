import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulo para hacer peticiones
import { HttpClientModule } from '@angular/common/http'
// Modulo para formulario
import { ReactiveFormsModule } from '@angular/forms';

// Componentes rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaClientesComponent,
    FormClientesComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
