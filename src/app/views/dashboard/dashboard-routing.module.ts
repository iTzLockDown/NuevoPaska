import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClasificacionContratoComponent} from './clasificacion-contrato/clasificacion-contrato.component';
import {FormClasificacionContratoComponent} from './clasificacion-contrato/form-clasificacion-contrato/form-clasificacion-contrato.component';
import {AtencionSolicitudComponent} from './Solicitud/atencion-solicitud/atencion-solicitud.component';
import {GestionSolicitudComponent} from './Solicitud/GestionSolicitud/gestion-solicitud/gestion-solicitud.component';
import {RegistraSolicitudComponent} from './Solicitud/registra-solicitud/registra-solicitud.component';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'dashboard'
    },
    children:[
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'plantilla',
        component: ClasificacionContratoComponent,
        data: {
          title: 'Plantilla Contrato'
        }
      },
      {
        path: 'plantilla/create',
        component: FormClasificacionContratoComponent,
        data: {
          title: 'Generador de Plantilla'
        }
      },
      {
        path: 'listarsolicitud',
        component: AtencionSolicitudComponent,
        data: {
          title: 'Lista Solicitud'
        }
      },
      {
        path: 'listarsolicitud/gestionsolicitud/:id',
        component: GestionSolicitudComponent,
        data: {
          title: 'Gestion Solicitud'
        }
      },
      {
        path: 'registrarsolicitud',
        component: RegistraSolicitudComponent,
        data: {
          title: 'Registra Solicitud'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
