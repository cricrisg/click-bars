import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.isLogged = true;
  }


  // Cuando cargue el componente comprobamos si tenemos token y cambiamos la variable para que aparezcan los botones o no.
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    // Subscripción al observable que hemos creado para enterarnos si hacemos loggin.
    this.usuariosService.loggedObs().subscribe((entra) => {
      this.isLogged = entra;

    });
  }

  // Función click para logout
  async onClickLogout() {

    const result = await Swal.fire({
      title: 'Logout',
      text: '¿Estás seguro que quieres salir de la aplicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Salir'
    });
    // Si confirmamos que queremos salir borramos el token y redirigimos a login
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      this.usuariosService.loginCompleted(false);
      this.router.navigate(['/login']);
    }


  }

}
