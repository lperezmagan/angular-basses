import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log('uuid: ', uuid());


// el decorador @Injectable indica que es un SERVICIO
@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
      id: uuid()
    },
    {
      name: 'Goku',
      power: 9500,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 3000,
      id: uuid()
    }
  ];

  addCharacter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    // Si esto no funciona: this.characters.push(newCharacter);
    // añadir el nuevo personaje utilizando spread (...)
    this.characters = [...this.characters, newCharacter];
    console.log('Main page imprime lo escuchado ', character);
    // añadir un nuevo personaje al listado
    // this.characters = [...this.characters, character];
  }

  // cambiamos el método de borrar un personaje
  // por el nuevo método borrar personaje por id: deleteCharacterById
  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id: string ) {
    // filtrar el array this.characters
    // eliminando el personaje cuyo id coincida con el id recibido
    // el nuevo valor de array será el de todos los personajes excepto el que tenga ese id
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
