import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarDetailComponent } from './components/bar-detail/bar-detail.component';
import { EditReservaComponent } from './components/edit-reserva/edit-reserva.component';
import { HomeComponent } from './components/home/home.component';
import { ListaRestaurantesComponent } from './components/lista-restaurantes/lista-restaurantes.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: ListaRestaurantesComponent },
  { path: "restaurante/:idrestaurante", component: BarDetailComponent },
  { path: "login", component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'modificar/:idreserva', component: EditReservaComponent },
  { path: "registro", component: RegistroComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
