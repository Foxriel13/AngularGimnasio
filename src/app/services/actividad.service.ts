import { Injectable } from '@angular/core';
import { Actividad } from '../components/actividad/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  constructor() { }

  // Método para obtener la lista de actividades
  getActividades(): Actividad[] {
    return [
      { id: 1,  fecha: "10/08/2014 00:00", lugar: "Aula02", monitor: "Miguel Goyena", tipo: "BodyPump" },
      { id: 2,  fecha: "12/09/2022 00:00", lugar: "Aula01", monitor: "Miguel Goyena", tipo: "Pilates" }
    ];
  }
}
