import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actividad } from '../actividad/actividad.model';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para las directivas de Angular como *ngIf, *ngFor, etc.
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent {
  @Input() actividad!: Actividad; // Decorador para recibir datos del padre
}
