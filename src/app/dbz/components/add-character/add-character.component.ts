import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AddCharacterComponent {
  // creo una nueva instancia de mi EMISOR DE EVENTOS
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  // creo un personaje de tipo Personaje
  // inicializado a vacío
  public character: Character = {
    name: '',
    power: 0
  };

  // método para emitir el personaje
  emitCharacter(): void {
    console.log('Emito personaje a añadir: ', this.character);

    // si no recibo del form un NOMBRE, no voy a hacer nada:
    if( this.character.name.length === 0 ) return;

    // si me llega valor para el NOMBRE, lo emito:
    this.onNewCharacter.emit({...this.character});

    // cuando se envíen los datos
    // quiero resetear los valores de los inputs
    this.character.name = '';
    this.character.power = 0;
  }
}
