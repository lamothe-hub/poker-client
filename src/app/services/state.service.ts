import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameState, Card } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  gameState: BehaviorSubject<GameState> = new BehaviorSubject<GameState>(null);
  baseUrl = 'http://localhost:8085';
  constructor(private http: HttpClient) { }

  getState() {
    this.http.get<GameState>(`${this.baseUrl}/state`).subscribe( response => {
      this.gameState.next(response);
    })
  }
}
