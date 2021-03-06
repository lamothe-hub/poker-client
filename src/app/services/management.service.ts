import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { GameState } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  baseUrl: string = "http://localhost:8085"
  //baseUrl: string = "https://poker-app-for-friends.herokuapp.com/"

  constructor(private stateService: StateService, 
    private http: HttpClient) { }

  addPlayer(playerName: string, playerAmount: number) {
    this.stateService.consecutiveLoadErrors = 0;
    let addPlayerUrl = `${this.baseUrl}/management/addPlayer/${playerName}/${playerAmount}`;
    return this.http.get<string>(addPlayerUrl);
  }

  createGame(playerName: string, buyinAmount: number, maxBuyin: number) {
    this.stateService.consecutiveLoadErrors = 0;
    let createGameUrl = `${this.baseUrl}/management/createGame/${playerName}/${buyinAmount}/${maxBuyin}`;
    return this.http.get<string>(createGameUrl);
  }
  
}
