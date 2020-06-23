import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { GameState } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  baseUrl: string = "http://localhost:8085"

  constructor(private stateService: StateService, 
    private http: HttpClient) { }

  addPlayer(playerName: string, playerAmount: number) {
    let addPlayerUrl = `${this.baseUrl}/management/addPlayer/${playerName}/${playerAmount}`;
    this.http.get<GameState>(addPlayerUrl).subscribe( response => {
      this.stateService.gameState.next(response);
    })
  }
}
