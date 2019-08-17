import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, ValidationService.alpaNumValidator]],
      'emailId': ['', [Validators.required, ValidationService.emailValidator]],
      'dob': ['', [Validators.required, ValidationService.dobValidator]],
      'phone': ['', [Validators.required, ValidationService.numberValidator, Validators.minLength(10), Validators.maxLength(10)]],
      'marks': ['', [Validators.required, ValidationService.decimalValidation]],
      'website': ['', [Validators.required, ValidationService.urlValidator]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', [Validators.required]],
    },
      {
        validator: ValidationService.confirmPasswordValidator
      });
  }

  public save(data: NgForm) {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(data)
    }
  }



}
