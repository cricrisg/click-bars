import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  isLogged: boolean;
  usuario: Usuario | undefined;

  constructor(private usuariosService: UsuariosService) {
    this.isLogged = true;
  }

  async ngOnInit() {
    try {
      this.usuario = await this.usuariosService.getPerfil();
      // console.log(this.usuario);
    } catch (err) {
      console.log(err);

    }


  }



}
