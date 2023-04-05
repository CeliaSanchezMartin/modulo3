import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserResp } from 'src/app/models/user-resp';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormregisterComponent {
  public myForm: FormGroup;
  //public user: User;

  constructor(private formBuilder: FormBuilder, private userService: UsuarioService, public router: Router) 
  { 
    this.buildForm();
  }

  public register() 
  {
    const user = this.myForm.value;
    console.log(user);
    this.userService.register(user).subscribe((data: UserResp)=>{
      console.log(data);

      if(data.mensaje != "-1"){
        this.router.navigate(["/loginPage"]);
        alert("Te has registrado correctamente");
      } else {
        alert("Fallo al registrarte")
      }
      
      
    });
  };

  private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido:[, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      foto:[, Validators.required],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[, [Validators.required, this.checkPasswords]]
      
    
    });
  }


  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  //ngOnInit(): void 
  //{
  //}

}

