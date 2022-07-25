import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegistoSemSucessoComponent } from '../registo_sem_sucesso/registo_sem_sucesso.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formLogin;
  theEvent;
  key;
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
 

  //Vai buscar os dados do registo efetuado ao browser (este armazena) e posteriormente vai comparar o número de adesão com o colocado.
  //Se os numeros de adesao concidirem o cliente vai avançar para o menu 
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


  //Mensagem mostrada caso os numero de adesao armazenado no localStorage e o numero de adesao colocado sejam diferentes
  openDialog() {
    const dialogRef = this.dialog.open(RegistoSemSucessoComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Resultado: ${result}`);
    });
  }
}
