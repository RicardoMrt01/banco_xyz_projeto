import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegistoComponent } from './registo/registo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RegistoSucessoComponent } from './registo_sucesso/registo_sucesso.component';
import { AuthGuard } from 'auth.guard';
import { AuthService } from 'auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { RegistoSemSucessoComponent } from './registo_sem_sucesso/registo_sem_sucesso.component';
import { SingletonRouterService } from 'src/services/singletonRouter.service';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RegistoComponent,
    MenuComponent,
    RegistoSucessoComponent,
    AcessoNegadoComponent,
    RegistoSemSucessoComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [AuthGuard, AuthService, SingletonRouterService,DatePipe],
  entryComponents: [RegistoSemSucessoComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
