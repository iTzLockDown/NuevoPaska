import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarsComponent } from './navbars/navbars.component';
import { BaseRoutingModule } from './base-routing.module';
import {SolicitudProcesoComponent} from './tipo-solicitud/solicitud-proceso/solicitud-proceso.component';
import {TipoSolicitudComponent} from './tipo-solicitud/tipo-solicitud.component';
import {TipoRequerimientoComponent} from './tipo-requerimiento/tipo-requerimiento.component';
import {EstadoSolicitudComponent} from './estado-solicitud/estado-solicitud.component';
import {SituacionSolicitudComponent} from './situacion-solicitud/situacion-solicitud.component';
import {GestionAtencionAsesorComponent} from './gestion-atencion-asesor/gestion-atencion-asesor.component';
import {AsignaOficinaComponent} from './gestion-atencion-asesor/asigna-oficina/asigna-oficina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),

  ],
  declarations: [
    NavbarsComponent,
    SolicitudProcesoComponent,
    TipoSolicitudComponent,
    TipoRequerimientoComponent,
    EstadoSolicitudComponent,
    SituacionSolicitudComponent,
    GestionAtencionAsesorComponent,
    AsignaOficinaComponent
  ]
})
export class BaseModule { }
