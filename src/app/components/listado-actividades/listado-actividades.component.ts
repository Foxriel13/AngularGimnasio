import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadService } from '../../services/actividad.service';
import { ActividadComponent } from '../actividad/actividad.component';
import { Actividad } from '../actividad/actividad.model';

@Component({
  selector: 'app-listado-actividades',
  standalone: true,
  imports: [CommonModule], // Importa ActividadComponent
  templateUrl: './listado-actividades.component.html',
  styleUrls: ['./listado-actividades.component.scss']
})
export class ListadoActividadesComponent implements OnInit {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.actividades = this.actividadService.getActividades();
  }
}
