import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { JohnnysTableComponent } from './components/johnnys-table/johnnys-table.component';
//import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    OverviewTableComponent,
    PlayerComponent,
    NavbarComponent,
    LobbyComponent,
    JohnnysTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
