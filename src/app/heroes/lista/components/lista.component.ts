import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public characterNames:string[]=["Arya Stark","Eddard Stark","Tyrion Lannister",
    "Sandor Clegane","Brienne de Tarth"];
  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero=this.characterNames.pop();
  }
}
