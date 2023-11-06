import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConnectionStatus, Network } from '@capacitor/network';

import * as JavaScriptObfuscator from 'javascript-obfuscator';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    networkStatus: ConnectionStatus | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) {}

    ngOnInit(){
        if (Network)
        {
          Network.getStatus().then((status)=>{
            this.networkStatus = status;
          })
        }
      
        Network.addListener("networkStatusChange", status=>{
          this.networkStatus=status;
        })
        
        Network.addListener('networkStatusChange', status => {
          console.log('Network status changed', status);
        });
        const logCurrentNetworkStatus = async () => {
          const status = await Network.getStatus();
        
          console.log('Network status:', status);
        };

      } 
      
    

  goToCharacters() {
    this.router.navigate(['/tabs/characters']);
  }



  

  

}
