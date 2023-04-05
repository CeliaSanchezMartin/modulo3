import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/user.service';





@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User
  constructor(private userService: UsuarioService, private router: Router){
    this.user = new User(0, "", "", "", "", "")
  }

  onSubmit(form: NgForm){
    this.userService.login(this.user).subscribe(data => {
      console.log(data);
      this.userService.logueado = true;
      this.userService.user = data[0];
      this.router.navigate(['/books'])
      
    })
    console.log(form.value);
    console.log(this.user);
    alert("Usuario y contraseña correctos");
  }
  

}
