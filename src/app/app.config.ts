// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust path as needed
import { SignUpComponent } from './sign-up/sign-up.component'; // Adjust path as needed

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }, // Optional: default route
      { path: '**', redirectTo: '/login' } // Optional: wildcard route
    ], withComponentInputBinding()) // Optional: enables input binding for routes
  ]
};