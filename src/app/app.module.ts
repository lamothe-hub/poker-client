import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
//import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PlayerComponent
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
