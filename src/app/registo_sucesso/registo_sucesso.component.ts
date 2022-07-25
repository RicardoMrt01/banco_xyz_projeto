import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registo_sucesso',
  templateUrl: './registo_sucesso.component.html',
  styleUrls: ['./registo_sucesso.component.css']
})
export class RegistoSucessoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navegarParaLogin();
  }
  //Quando o registo for efetuado o utilizador vai ser direcionado para a pagina de login com um compasso de espera de 600ms
  navegarParaLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 600);
  }
}
