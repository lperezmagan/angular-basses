import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  // Creo una nueva instancia de mi Emisor de Eventos
  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  // ahora necesito un uuid para borrarlo
  // así que no voy a emitir un número,
  // emitiré un string (uuid)
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Pepe',
    power: 100
    },
    {
      name: 'Laura',
      power: 200
    }
  ]

  // método para obtener el índice cuando se clica el botón
  // onDeleteCharacter( index: number ):void {
  //   console.log(index);
  //   // Emitir el ID del personaje
  //   this.onDelete.emit(index);
  // }

  // ahora necesito un id que será de tipo string:
  onDeleteCharacter( id?: string ):void {
    // si el id no existe, no lo emitas:
    if(!id) return;
    console.log(id);
    // Emitir el ID del personaje
    this.onDelete.emit(id);
  }

}
