import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';


import { environment } from '../../environments/environment'; 
import { CharacterModalPage } from '../character-modal/character-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  characters: any = [];
  charactersLoaded: boolean = false;
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalController: ModalController
  ) {}

 
  ngOnInit() {
    this.getCharacters().subscribe(
      (res) => this.handleCharacterResponse(res),
      (error) => this.handleCharacterResponse(null)
    );
  }
  
  private handleCharacterResponse(response: any) {
    if (response) {
      this.characters = response;
    }
    this.charactersLoaded = true;
  }
  


  getCharacters() {
    return this.http.get(`${this.apiUrl}/characters/list`);
  }

  async presentModal(character: any) {
    const modal = await this.modalController.create({
      component: CharacterModalPage,  // Reemplaza con el nombre de tu página de modala
      componentProps: {
        character: character
      }
    });
    return await modal.present();
  }
 
}
