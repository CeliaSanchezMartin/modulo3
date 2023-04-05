import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UsuarioService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public userService: UsuarioService  ){}

}
