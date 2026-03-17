import { Component } from '@angular/core';
import { BrandingPanel } from '../branding-panel/branding-panel';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    BrandingPanel
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  personalFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  accountFormGroup: FormGroup;

  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.personalFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.pattern(/^\d{10}$/)]
    });

    this.addressFormGroup = this.formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });

    this.accountFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(8)]], 
      confirmPassword: ['', Validators.required],
    });
  }

  handleRegister() {

    if (this.accountFormGroup.invalid) {
      return;
    }

    this.isLoading = true;

    const finalFormData = {
      ...this.personalFormGroup.value,
      ...this.addressFormGroup.value,
      ...this.accountFormGroup.value
    };

    setTimeout(() => {
      this.isLoading = false;
      console.log('Registered with:', finalFormData);
    }, 1200);

  }
}
