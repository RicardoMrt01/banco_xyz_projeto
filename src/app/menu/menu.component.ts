import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transacoes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  registo;
  nameCliente;
  balance = 25000;
  fromStr = this.balance + '€';
  filterStr = '';
  toAcc = '';
  amt;
  order = 'asc';
  transactionsArray: any = [];
  fieldName = '';
  isSubmitted = false;

 
  constructor(
    private transactionService: TransactionService
    ) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.isSubmitted = false;
    //atualiza o saldo
    this.balance += this.amt;
    this.fromStr = '€' + this.balance;
    let obj = {
      dates: {
        valueDate: new Date().getTime()
      },
      local_compra: {
        accountNumber: this.toAcc,
        name: 'Teste de Registo'
      },
      transaction: {
        amountCurrency: {amount: this.amt, currencyCode: "EUR"},
        type: "Transação"
      }
    }
    this.transactionsArray = [obj, ...this.transactionsArray];
    this.amt = '';
    this.toAcc = '';
  }
}



