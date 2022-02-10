import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    DetalhesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
