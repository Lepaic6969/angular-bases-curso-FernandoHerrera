import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Eddard Stark';
  public age: number=35;

  //Los getter son equivalentes a las propiedades computadas
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Tyrion Lannister';
  }
  changeAge():void{
    this.age=26;
  }
  resetForm():void{
    this.name='Eddard Stark';
    this.age=35;
  }
}
