import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { JohnnysTableComponent } from './components/johnnys-table/johnnys-table.component';
import { CreateComponent } from './components/create/create.component';
import { JeffreysTableComponent } from './components/jeffreys-table/jeffreys-table.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PokerTableComponent } from './components/poker-table/poker-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavbarComponent,
    LobbyComponent,
    JohnnysTableComponent,
    CreateComponent,
    JeffreysTableComponent,
    CardComponent,
    PokerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
