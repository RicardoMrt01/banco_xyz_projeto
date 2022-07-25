import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {
  formRegisto;
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    //garantir que o armazenamento da web está vazio
    localStorage.clear();
    //controla os dados colacados nos campos
    this.formRegisto = this.fb.group({
      nome: [''],
      n_adesao: [''],
      email: [''],
      contacto: [''],
      morada: ['']
    });

    this.formRegisto.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  //converte para JSON e guarda no localStorage da web
  registo() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('registo', this.conversao);

    // Se correr tudo ok vai executar a rota e vai mudar de pagina
    this.verificaRegisto();
  }

  verificaRegisto() {
    setTimeout(() => {
      if (localStorage.getItem('registo')) {
        // Rota para a pagina do registo com sucesso
        this.router.navigate(['registo-sucesso']);
      } else {
        return false;
      }
    }, 200);
  }

}
