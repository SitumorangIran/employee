import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  username: string = '';
  password: string = '';

  login(): void {

    if (this.username == "admin" && this.password == "admin") {
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonColor: '#28a745', // Green color
        confirmButtonText: 'Okay'
      });
      localStorage.setItem("username", this.username)
      this.router.navigate(['/employee']);

    } else if (this.username == '' && this.password == '') {
      Swal.fire({
        title: 'Failed!',
        text: 'Username or Password cannot be empty.',
        icon: 'error',
        confirmButtonColor: '#dc3545', // Red color
        confirmButtonText: 'Try Again'
      });
    } else {
      Swal.fire({
        title: 'Failed!',
        text: 'Username or Password not found.',
        icon: 'error',
        confirmButtonColor: '#dc3545', // Red color
        confirmButtonText: 'Try Again'
      });
    }
  }
}
