import { Routes } from '@angular/router';
import { ListadoActividadesComponent } from './components/listado-actividades/listado-actividades.component';

export const routes: Routes = [  // Agrega 'export' aquí
  { path: 'actividades', component: ListadoActividadesComponent },
  { path: '', redirectTo: '/actividades', pathMatch: 'full' },
];
