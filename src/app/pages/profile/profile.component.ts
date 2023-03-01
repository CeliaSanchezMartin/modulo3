import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public myUser: User
  constructor(){
    this.myUser = new User ("Celia", "Sánchez","celia@celia","sdd", "contraseña" )
  }

  public nombreCompleto():string {
    return this.myUser.nombreCompleto();
  }

  modificar(nuevoNombre: HTMLInputElement, nuevoApp: HTMLInputElement, nuevoCorreo: HTMLInputElement, nuevoURlL: HTMLInputElement){
    this.myUser.name = nuevoNombre.value;
    this.myUser.last_name = nuevoApp.value;
    this.myUser.email = nuevoCorreo.value;
    this.myUser.photo = nuevoURlL.value;
  }
}
