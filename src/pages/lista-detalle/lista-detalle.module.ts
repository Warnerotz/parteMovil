import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDetallePage } from './lista-detalle';

@NgModule({
  declarations: [
    ListaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDetallePage),
  ],
})
export class ListaDetallePageModule {}
