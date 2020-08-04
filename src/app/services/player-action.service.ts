import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { GameState } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerActionService {

  baseUrl: string = "http://localhost:8085"
  //baseUrl: string = "https://poker-app-for-friends.herokuapp.com/";

  constructor(private stateService: StateService, 
    private http: HttpClient) { }

  fold(playerName): Observable<GameState> {
    let token = this.stateService.getHashCode();
    let foldUrl = `${this.baseUrl}/action/${playerName}/${token}/fold`;
    return this.http.get<GameState>(foldUrl);
  }

  check(playerName): Observable<GameState>  {
      let token = this.stateService.getHashCode();
      let checkUrl = `${this.baseUrl}/action/${playerName}/${token}/check`;
      return this.http.get<GameState>(checkUrl);
  }
  
  call(playerName, callAmount): Observable<GameState>  {
    let token = this.stateService.getHashCode();
    let callUrl = `${this.baseUrl}/action/${playerName}/${token}/call/${callAmount}`;
    return this.http.get<GameState>(callUrl);
  }

  bet(playerName, betAmount): Observable<GameState>  {
    let token = this.stateService.getHashCode();
    let callUrl = `${this.baseUrl}/action/${playerName}/${token}/bet/${betAmount}`;
    return this.http.get<GameState>(callUrl);
  }
  
}
