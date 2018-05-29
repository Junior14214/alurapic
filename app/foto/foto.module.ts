import { FotoService } from './foto.service';
import { FiltroPorTitulo } from './foto.pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [FotoService]
})
export class FotoModule { }