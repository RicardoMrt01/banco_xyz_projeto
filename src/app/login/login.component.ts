import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistoSemSucessoComponent } from '../registo_sem_sucesso/registo_sem_sucesso.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  registo;
  message;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      n_adesao: ['']
    });
  }
  //So vai permitir que o utilizador quando estiver a inserir os dados do login, so possa inserir numeros
  onlynumber(evt) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  //verifica se o numero de adesao do registo é igual ao numero de adesao do login, se sim vai executar a rota
  login() {
    this.registo = JSON.parse(localStorage.getItem('registo'));
    const n_adesao_Registo = this.registo['n_adesao'];
    const n_adesao_Inserido = this.formLogin.get('n_adesao').value;
    if (n_adesao_Registo === n_adesao_Inserido) {
      this.router.navigate(['/menu']);
    } else {
      this.openDialog();
    }
  }

  //aviso que o login esta incorreto
  openDialog() {
    const dialogRef = this.dialog.open(RegistoSemSucessoComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
