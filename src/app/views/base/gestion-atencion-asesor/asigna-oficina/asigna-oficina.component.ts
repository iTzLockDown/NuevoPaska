import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OficinaResponse} from '../../../../Models/Response/OficinaResponse';
import {AsesorRequest} from '../../../../Models/Request/AsesorRequest';
import {OficinaService} from '../../../../Services/oficina.service';
import {AsesorService} from '../../../../Services/asesor.service';
import alertifyjs from 'AlertifyJS';
@Component({
  selector: 'app-asigna-oficina',
  templateUrl: './asigna-oficina.component.html'
})
export class AsignaOficinaComponent implements OnInit {
  oficinaColaUnica : OficinaResponse[];
  oficinaColaMultiple: OficinaResponse[];
  codigoUsuario: string;
  codigoAsesor: string;
  asignaAsesor: AsesorRequest;
  constructor(private oficinaService: OficinaService,
              private asesorService: AsesorService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.RecargaInfo();
  }
  ngOnChanges():void{
    this.RecargaInfo();
  }
  AsignaOficinaAsesor(codigoOficina: string):void
  {
    this.asignaAsesor = new AsesorRequest();
    this.asignaAsesor.CodigoOficina = codigoOficina;
    this.asignaAsesor.UsuarioAsesor = this.codigoAsesor;
    this.asignaAsesor.Usuario = 'ntrucios';
    this.asignaAsesor.Terminal = 'CYRREC04';
    this.oficinaService.AsignaOficinaAsesor(this.asignaAsesor)
      .subscribe(
        response =>
        {
          alertifyjs.success('Se asigno la oficina');
          this.RecargaInfo();
        }
        );



  }

  EliminaOficina(codigoOficina: string):void
  {
    this.oficinaService.EliminaOficinaAsesor(codigoOficina)
      .subscribe(
        response =>{
          alertifyjs.error('Se elimino la oficina.');
          this.RecargaInfo();
        }
      );

  }


  RecargaInfo():void
  {
    this.oficinaService.OficinaColaUnica().subscribe(
      response => this.oficinaColaUnica = response
    );

    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        let nombre = params['nombreAsesor']
        this.codigoUsuario = nombre;
        this.codigoAsesor = id;
        if (id) {
          this.asesorService.OficinaAsesor(id).subscribe(
            response => this.oficinaColaMultiple = response);
        }
      });
  }
}
