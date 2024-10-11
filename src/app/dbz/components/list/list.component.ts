import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() //Este decorador e dice a angular que esta property que estoy definiendo
            //la voy a recibir del mundo exterior
  public characterList:Character[]=[ //Si no me mandan nada este es el valor por defecto
    {
      name:"Trunks",
      power:10
    }
  ];
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();
  //onDelete->Este sólo va a emitir el índice
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }
}
