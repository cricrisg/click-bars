import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clientes' },
  { path: 'clientes', component: ListaClientesComponent, canActivate: [LoginGuard] },
  { path: 'clientes/new', component: FormClientesComponent, canActivate: [LoginGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
