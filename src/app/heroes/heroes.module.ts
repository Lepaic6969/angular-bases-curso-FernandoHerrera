import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/components/hero.component";
import { ListaComponent } from "./lista/components/lista.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroComponent,
    ListaComponent
  ],
  exports:[
    HeroComponent,
    ListaComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
