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
    this.myUser = new User ("Celia", "Sánchez","celia@celia","https://images.unsplash.com/photo-1677526523517-d40d871c1191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80", "contraseña" )
  }

  public nombreCompleto():string {
    return this.myUser.nombreCompleto();
  }

  modificar(nuevoNombre: HTMLInputElement, nuevoApp: HTMLInputElement, nuevoCorreo: HTMLInputElement, nuevoUrl: HTMLInputElement){
    this.myUser.name = nuevoNombre.value;
    this.myUser.last_name = nuevoApp.value;
    this.myUser.email = nuevoCorreo.value;
    this.myUser.photo = nuevoUrl.value;

    alert("El ususario se ha modificado")
  }
}
