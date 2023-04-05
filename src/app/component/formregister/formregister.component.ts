import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormregisterComponent {
  public myForm: FormGroup;
  //public user: User;

  constructor(private formBuilder: FormBuilder, private userService: UsuarioService) 
  { 
    this.buildForm();
  }

  public register() 
  {
    const user = this.myForm.value;
    console.log(user);
    this.userService.register(user).subscribe((data)=>{
      console.log(data);
      
      
    });
  };

  private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido:[, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      
    
    });
  }


  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  ngOnInit(): void 
  {
  }

}

