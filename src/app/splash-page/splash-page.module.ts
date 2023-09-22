import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPagePageRoutingModule } from './splash-page-routing.module';

import { SplashPage } from './splash-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashPagePageRoutingModule
  ],
  declarations: [SplashPage]
})
export class SplashPagePageModule {}
