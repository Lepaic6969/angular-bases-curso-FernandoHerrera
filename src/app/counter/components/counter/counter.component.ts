import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  styles:`
    h1{
      color:brown;
    }
    button{
      padding: 10px;
      border-radius: 30%;
      margin-right: 5px;
      background-color:aqua;
    }
  `
})

export class CounterComponent {
  public counter:number=0;

  increaseBy(value:number):void{
    this.counter+=value;
  }
  resetCounter():void{
    this.counter=0;
  }
}
