import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarsComponent } from './navbars/navbars.component';
import {AutentificacionGuard} from '../../Guards/autentificacion.guard';
import {TipoSolicitudComponent} from './tipo-solicitud/tipo-solicitud.component';
import {SolicitudProcesoComponent} from './tipo-solicitud/solicitud-proceso/solicitud-proceso.component';
import {TipoRequerimientoComponent} from './tipo-requerimiento/tipo-requerimiento.component';
import {EstadoSolicitudComponent} from './estado-solicitud/estado-solicitud.component';
import {SituacionSolicitudComponent} from './situacion-solicitud/situacion-solicitud.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      },
      {
        path: 'tiposolicitud',
        component: TipoSolicitudComponent,
        data: {
          title: 'Tipo Solicitud'
        }
      },
      {
        path: 'tiposolicitud/proceso/:id',
        component: SolicitudProcesoComponent,
        data: {
          title: 'Proceso'
        }
      },
      {
        path: 'requisitos',
        component: TipoRequerimientoComponent,
        data: {
          title: 'Requisito'
        }
      },
      {
        path: 'estado',
        component: EstadoSolicitudComponent,
        data: {
          title: 'Estado Solicitud'
        }
      },
      {
        path: 'situacion',
        component: SituacionSolicitudComponent,
        data: {
          title: 'Situacion Solicitud'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
