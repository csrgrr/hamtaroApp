import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.page.html',
  styleUrls: ['./splash-page.page.scss'],
})
export class SplashPage {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['tabs']); 
    }, 2000);
  }
}