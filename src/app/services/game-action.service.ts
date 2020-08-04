import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { GameState } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameActionService {

  baseUrl: string = "http://localhost:8085"
  //baseUrl: string = "https://poker-app-for-friends.herokuapp.com/";
  constructor(private stateService: StateService, 
    private http: HttpClient) { }

  startHand(playerName: string) {
   let token = this.stateService.getHashCode();
   let foldUrl = `${this.baseUrl}/management/startHand/${playerName}/${token}`;
    this.http.get<GameState>(foldUrl).subscribe( response => {
        this.stateService.gameState.next(response);
  })

    
  }
}