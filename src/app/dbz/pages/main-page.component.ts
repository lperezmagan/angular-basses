import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // INYECTAMOS el servicio DBZ
  // lo declaro privado
  // al ser privado necesitaré getter y setters
  constructor( private dbzService: DbzService) {}

  // getter y setters:
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
  }


}
