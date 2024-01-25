import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  async login() {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      console.log('User logged in:', userCredential.user);

    } catch (error: any) {
      console.log('Login error:', error.message);
    }
  }
}
