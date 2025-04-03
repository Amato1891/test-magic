// sign-up.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink], // For ngModel and routerLink
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Basic sign-up validation (replace with real logic later)
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
    } else if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required';
    } else {
      this.errorMessage = '';
      // Simulate successful sign-up (replace with actual service call)
      console.log('Sign-up successful:', { username: this.username, email: this.email });
      this.router.navigate(['/login']); // Redirect to login after sign-up
    }
  }
}