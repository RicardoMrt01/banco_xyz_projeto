import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated() {
    //obtem token do registo
    const token = localStorage.getItem('registo');

    //verifica se existe
    if (token) {
        return true;
    }

    return false;
  }
}
