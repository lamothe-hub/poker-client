import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { GameState } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PlayerActionService {

  baseUrl: string = "http://localhost:8085"

  constructor(private stateService: StateService, 
    private http: HttpClient) { }

  fold(playerName) {
    let foldUrl = `${this.baseUrl}/action/${playerName}/fold`;
    this.http.get<GameState>(foldUrl).subscribe( response => {
      this.stateService.gameState.next(response);
    })
  }
  check(playerName) {
      let checkUrl = `${this.baseUrl}/action/${playerName}/check`;
      this.http.get<GameState>(checkUrl).subscribe( response => {
        this.stateService.gameState.next(response);
      })
      
  }
  
  call(playerName, callAmount) {
    let callUrl = `${this.baseUrl}/action/${playerName}/call/${callAmount}`;
    this.http.get<GameState>(callUrl).subscribe( response => {
      this.stateService.gameState.next(response);
    })
  }
  
}
