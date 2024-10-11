import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
 constructor(private dbzService:DbzService){}

 //Todo esto es para arreglar lo del servicio privado(Es sólo como una capa extra)
 get characters():Character[]{
    return this.dbzService.characters;
 }
 onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
 }
 onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
 }
}
