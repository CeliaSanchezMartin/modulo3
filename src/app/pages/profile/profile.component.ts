import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public myUser: User

  constructor(public usuarioService: UsuarioService){
   // this.myUser = new User ("Celia", "Sánchez","celia@celia","https://images.unsplash.com/photo-1677526523517-d40d871c1191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80", "contraseña" )
    this.myUser = this.usuarioService.user;
    console.log(this.myUser);
    
  }

  public nombreCompleto():string {
    return this.myUser.nombreCompleto();
  }

  modificar(nuevoNombre: string, nuevoApp: string, nuevoCorreo: string, nuevoUrl: string){
    this.myUser.name = nuevoNombre;
    this.myUser.last_name = nuevoApp;
    this.myUser.email = nuevoCorreo;
    this.myUser.photo = nuevoUrl;

    alert("El ususario se ha modificado")
  }
}
