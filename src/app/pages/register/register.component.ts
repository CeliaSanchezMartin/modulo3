import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  public myForm: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register() 
  {
    this.user = this.myForm.value;
    alert("Usuario registrado")
  }

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

    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  ngOnInit(): void 
  {
  }

}




