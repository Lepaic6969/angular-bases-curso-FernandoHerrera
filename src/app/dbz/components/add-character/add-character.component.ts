 import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //Esto es para la emisión del nuevo personaje hacia el padre(Hacia el agrupador page)
  @Output()
  public onCreate:EventEmitter<Character>=new EventEmitter(); //Creas el evento que vas a emitir

  public character:Character={
    name:'',
    power:0
  }

  emitCharacter():void{ //Voy a emitir el personaje a guardar al padre(el page o agrupador), que es quién tiene la lista

    //debugger;

    if(this.character.name.length===0) return;

    //Emito el evento tras un formulario validado
    this.onCreate.emit(this.character);

    //Una vez enviado el formulario lo reseteamos
    this.character={
      name:"",
      power:0
    }
  }
}
