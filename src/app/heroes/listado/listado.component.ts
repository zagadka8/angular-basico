import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Thor','Batman','Superman'];
  heoreBorrados: string = '';
  
  borrarHeroe(){
    this.heoreBorrados = this.heroes.shift() || '';
  }
}
