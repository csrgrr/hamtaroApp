import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { environment } from '../../environments/environment'; 

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.page.html',
  styleUrls: ['./character-modal.page.scss'],
})
export class CharacterModalPage implements OnInit {
  character: any;
  apiUrl = environment.apiUrl;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.character = this.navParams.get('character');
  }

  closeModal() {
    this.modalController.dismiss();
  }
}