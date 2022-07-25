import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private router: Router) { }

  //Quando o botão de registo é clicado vai para o layout do registo 
  Registo() {
    this.router.navigate(['registo']);
   }
}

