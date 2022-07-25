import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { RegistoComponent } from '../registo/registo.component';
import { RegistoSucessoComponent } from '../registo_sucesso/registo_sucesso.component';
import { MenuComponent } from '../menu/menu.component';
import { AuthGuard } from 'auth.guard';
import { AcessoNegadoComponent } from '../acesso-negado/acesso-negado.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registo', component: RegistoComponent },
  { path: 'registo-sucesso', component: RegistoSucessoComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
