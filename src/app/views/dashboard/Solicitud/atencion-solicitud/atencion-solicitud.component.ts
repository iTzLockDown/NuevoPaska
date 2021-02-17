import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccionSolicitud} from '../../../../Models/Request/AccionSolicitud';
import {AtencionSolicitudResponse} from '../../../../Models/Response/AtencionSolicitudResponse';
import {SituacionResponse} from '../../../../Models/Response/SituacionResponse';
import {AtencionSolicitudService} from '../../../../Services/atencion-solicitud.service';
import {SituacionSolicitudService} from '../../../../Services/situacion-solicitud.service';
import {EstadoProcesoSolicitudService} from '../../../../Services/estado-proceso-solicitud.service';

@Component({
  selector: 'app-atencion-solicitud',
  templateUrl: './atencion-solicitud.component.html',
})
export class AtencionSolicitudComponent implements OnInit {
  estadoModalProceso: boolean = false;
  public accionSolicitud: AccionSolicitud = new AccionSolicitud();
  atencionSolicitud: AtencionSolicitudResponse[];
  situacionResponse: SituacionResponse[];
  objetoSituacion: SituacionResponse;
  codigoSolicitud: string;
  estadosSolicitudBU: AtencionSolicitudResponse[];
  estadosSolicitud: AtencionSolicitudResponse[];

  constructor(private router: Router,
              private solicitudAtencion: AtencionSolicitudService,
              private situacionSolicitudService: SituacionSolicitudService,
              private estadoProcesoSolicitud: EstadoProcesoSolicitudService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CargarAtencion('bvcvbcbc');
    this.CargarEstados();
  }
  CargarAtencion(codigoAsesor: string): void {
    this.solicitudAtencion.Lista(codigoAsesor).subscribe(

      (res: AtencionSolicitudResponse[]) => {
        res.sort((a, b) => (a.Estado > b.Estado ? -1 : 1));
        this.estadosSolicitud = res;
        this.estadosSolicitudBU = res;
      }
      , (err) => {
        throw err;
      }
    );
  }

  IniciarAccion(codigoSolicitud: string): void {
    this.accionSolicitud.CodigoSolicitud = codigoSolicitud;
    this.accionSolicitud.UsuarioAtencion = 'alizana';
    this.accionSolicitud.UsuarioTerminal = 'CYRREC04';

    this.estadoProcesoSolicitud.Iniciar( this.accionSolicitud).subscribe(
      response => console.log(response)
    );
  }
  Prueba() {
    this.estadosSolicitud = this.estadosSolicitudBU.filter(x => `${x.Situacion}`.toUpperCase().includes(this.objetoSituacion.Descripcion));
  }
  CargarEstados() {
    this.situacionSolicitudService.Listar().subscribe(
      respose => this.situacionResponse = respose
    );
  }
  AbrirCreditoCliente(codigoSolicitud: string) {
    this.estadoModalProceso = true;
    this.codigoSolicitud = codigoSolicitud;
  }
  CerrarCreditoCliente($event) {
    this.estadoModalProceso = $event;
  }
}
