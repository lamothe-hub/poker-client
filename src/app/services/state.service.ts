import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameState, Card } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  gameState: BehaviorSubject<GameState> = new BehaviorSubject<GameState>(null);
  //baseUrl = 'http://localhost:8085';
  baseUrl: string = "https://poker-app-for-friends.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getStateForPlayer(playerName: string) {
    this.http.get<GameState>(`${this.baseUrl}/state/${playerName}/dummy`).subscribe( response => {
      if(this.dataChanged(this.gameState.value, response)) {
        this.gameState.next(response);
      }
    })
  }

  getMasterState() {
    this.http.get<GameState>(`${this.baseUrl}/state`).subscribe( response => {
      if(this.dataChanged(this.gameState.value, response)) {
        this.gameState.next(response);
      }
    })
  }

  dataChanged(previous: GameState, next: GameState): boolean {

    if(previous == null || next == null) {
      return true;
    }

    if(
      previous.currTurn != next.currTurn ||
      previous.dealerName != next.dealerName ||
      previous.runStatus != next.runStatus ||
      previous.pot != next.pot ||
      previous.mostRecentBetSize != next.mostRecentBetSize
      ) {
        return true;
      }

    return false;
  }

}
