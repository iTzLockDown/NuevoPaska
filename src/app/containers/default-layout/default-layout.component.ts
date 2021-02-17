import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
import alertifyjs from 'AlertifyJS';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router: Router) {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  SalirSesion()
  {
    sessionStorage.removeItem('token');
    alertifyjs.warning('¡Salio de Paska!');
    window.location.reload();

  }
}
