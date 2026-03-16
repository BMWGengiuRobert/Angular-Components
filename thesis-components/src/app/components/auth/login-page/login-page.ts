import { Component } from '@angular/core';
import { BrandingPanel } from '../branding-panel/branding-panel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-login-page',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    BrandingPanel],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  email = '';
  password = '';
  hidePassword = true;
  isLoading = false;

  handleSignIn() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Signed in with:', this.email);
    }, 1200);
  }

  loginWithGoogle() {
    console.log('Google login triggered');
  }
}
