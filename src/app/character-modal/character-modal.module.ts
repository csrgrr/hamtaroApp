import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterModalPageRoutingModule } from './character-modal-routing.module';

import { CharacterModalPage } from './character-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterModalPageRoutingModule
  ],
  declarations: [CharacterModalPage]
})
export class CharacterModalPageModule {}
