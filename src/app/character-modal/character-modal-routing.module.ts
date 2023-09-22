import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterModalPage } from './character-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterModalPageRoutingModule {}
