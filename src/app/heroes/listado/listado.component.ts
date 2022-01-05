import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  public heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Antman', 'Shang-chi', 'Captain America'];
  public deletedHero: string = '...';

  deleteHero() {
    this.deletedHero = this.heros.pop() || '...';
  }
}
