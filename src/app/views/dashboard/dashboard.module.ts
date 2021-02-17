import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {QuillModule} from 'ngx-quill';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {FormClasificacionContratoComponent} from './clasificacion-contrato/form-clasificacion-contrato/form-clasificacion-contrato.component';
import {ClasificacionContratoComponent} from './clasificacion-contrato/clasificacion-contrato.component';
import {BaseRoutingModule} from '../base/base-routing.module';
import {CommonModule} from '@angular/common';
import {RegistraSolicitudComponent} from './Solicitud/registra-solicitud/registra-solicitud.component';
import {CreditoClienteComponent} from './Solicitud/registra-solicitud/credito-cliente/credito-cliente.component';
import {BuscarClienteComponent} from './Solicitud/registra-solicitud/buscar-cliente/buscar-cliente.component';
import {AnuladoSolicitudComponent} from './Solicitud/GestionSolicitud/anulado-solicitud/anulado-solicitud.component';
import {AtendidoSolicitudComponent} from './Solicitud/GestionSolicitud/atendido-solicitud/atendido-solicitud.component';
import {EnviadoSolicitudComponent} from './Solicitud/GestionSolicitud/enviado-solicitud/enviado-solicitud.component';
import {GestionSolicitudComponent} from './Solicitud/GestionSolicitud/gestion-solicitud/gestion-solicitud.component';
import {AtencionSolicitudComponent} from './Solicitud/atencion-solicitud/atencion-solicitud.component';
import {EstadoProcesoSolicitudComponent} from './Solicitud/atencion-solicitud/estado-proceso-solicitud/estado-proceso-solicitud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    QuillModule.forRoot(),
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    BaseRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    ClasificacionContratoComponent,
    FormClasificacionContratoComponent,
    RegistraSolicitudComponent,
    CreditoClienteComponent,
    BuscarClienteComponent,
    AnuladoSolicitudComponent,
    AtendidoSolicitudComponent,
    EnviadoSolicitudComponent,
    GestionSolicitudComponent,
    AtencionSolicitudComponent,
    EstadoProcesoSolicitudComponent,

  ]
})
export class DashboardModule { }
