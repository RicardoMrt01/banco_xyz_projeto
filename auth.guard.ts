import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    base_url: string;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate() {
        // Verifica se existe Token
        if (this.authService.isAuthenticated()) {
            // Caso exista token retorna true
            return true;
        } else {
            // Caso o token nao exista vai para outra pagina
            this.router.navigate(['/acesso-negado']);
            return false;
        }
    }

}
