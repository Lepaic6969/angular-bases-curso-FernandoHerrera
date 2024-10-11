import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //Este es para poder usar las directivas ngIf y ngFor en este módulo
import { FormsModule } from '@angular/forms'; //Este es para el NgModule

import { MainPageComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
