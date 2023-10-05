import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenUserValidator } from '../utils/custom-validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(6), forbiddenUserValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get userControl() {
    return this.userForm.controls['user'];
  }

  get userControlIsInvalid() {
    return this.userControl.invalid && this.userControl.touched;
  }

  get emailControl() {
    return this.userForm.controls['email'];
  }

  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  get passwordControl() {
    return this.userForm.controls['password'];
  }

  get passwordControlIsInvalid() {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
    alert('Formulario invalido');
    } else {
      alert('Formulario Valido!');
      console.log(this.userForm.value);
    }
  }
}
