import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: any = '';
  model: string = '';
  dob: string = '';
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      acceptance: [''],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  submit() {
    this.submitted = true;
    console.log(this.registerForm);
  }
}
