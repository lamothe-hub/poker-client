import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameState, Card } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  gameState: BehaviorSubject<GameState> = new BehaviorSubject<GameState>(null);
  joinedGame: boolean = false;
  consecutiveLoadErrors = 0;
  baseUrl = 'http://localhost:8085';
  //baseUrl: string = "https://poker-app-for-friends.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getStateForPlayer(playerName: string) {
    if(this.consecutiveLoadErrors < 10) {
      let hashCode = this.getHashCode();
      this.http.get<GameState>(`${this.baseUrl}/state/${playerName}/${hashCode}`).subscribe( response => {
        this.consecutiveLoadErrors = 0;
        if(this.dataChanged(this.gameState.value, response)) {
          this.gameState.next(response);
        }
      }, error => {
        this.consecutiveLoadErrors = this.consecutiveLoadErrors + 1;
        console.log(this.consecutiveLoadErrors)
      })
    }
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
      previous.mostRecentBetSize != next.mostRecentBetSize ||
      previous.playersList.length != next.playersList.length
      ) {
        return true;
      }

    return false;
  }

  setToJoined() {
    sessionStorage.setItem("joinedGame", "true");
  }

  setLeaveGame() {
    sessionStorage.setItem("joinedGame", "false");
  }

  setHashCode(hashCode: string) {
    sessionStorage.setItem("hashCode", hashCode);
  }

  getHashCode() {
    return sessionStorage.getItem("hashCode");

  }

}
