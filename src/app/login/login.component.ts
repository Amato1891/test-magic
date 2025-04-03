// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink], // Required for two-way binding with ngModel
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Basic login logic (replace with your actual authentication service)
    if (this.username === 'user' && this.password === 'password') {
      this.errorMessage = '';
      // Navigate to a different route (e.g., home) after successful login
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}