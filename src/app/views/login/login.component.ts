import {Component, OnInit} from '@angular/core';
import {Login} from '../../Models/login';
import {Router} from '@angular/router';
import {LoginService} from '../../Services/login.service';
import alertifyjs from 'AlertifyJS';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  usuario: Login;
  constructor(private router: Router, private login: LoginService ) {
    this.usuario = new Login();
  }

  ngOnInit(): void {
    if (this.login.Autenticado()) {
      this.router.navigate(['/dashboard']);
    }
  }

  routerlink(): void {
    this.router.navigate(['/dashboard']);
  }

  login2(): void {
    if (this.usuario.Usuario == null || this.usuario.Contrasenia == null) {
      alertifyjs
        .alert('Error Verifique.', 'Ingrese sus credenciales.!!', function() {
          alertifyjs.error('Ingrese sus credenciales!!');
        });
      return;
    }
    this.login.login(this.usuario).subscribe(response => {

      sessionStorage.setItem('token', response.Token);
      this.router.navigate(['/dashboard']);
      alertifyjs.success('¡Bienvenido a Paska Web!');
    }, error => {
      if (error.status == 400) {
        alertifyjs.error('¡Credenciales Incorrectas!');
      }
    });
  }
}
