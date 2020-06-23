import { Component, OnInit } from '@angular/core';
import { GameState, Card } from 'src/app/model';
import { Subscription, interval } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { GameActionService } from 'src/app/services/game-action.service';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-jeffreys-table',
  templateUrl: './jeffreys-table.component.html',
  styleUrls: ['./jeffreys-table.component.css']
})
export class JeffreysTableComponent implements OnInit {

  gameState: GameState;
  
  subscription: Subscription;
  constructor(private stateService: StateService, private gameActionService: GameActionService, 
    private managementService: ManagementService) { }

  ngOnInit(): void {
    
    this.stateService.gameState.subscribe( newGameState => {
        this.gameState = newGameState;
    }); 

    this.subscription = interval(1000).subscribe(val => {
      this.stateService.getMasterState();
    })
    
  }

  addPlayer(playerName: string, playerAmount: number) {
    this.managementService.addPlayer(playerName, playerAmount);
  }

  isMaster() {
    let playerName = sessionStorage.getItem("playerName"); 
    if(playerName === this.stateService.gameState.value.masterName ) {
      return true;
    }
    return false;
  }

  printFlop() {
    var flopString = ""; 
    
    flopString += this.getFaceCardNumber(this.gameState.flop[0]) + this.getSuitLetter(this.gameState.flop[0]) + " | ";
    flopString += this.getFaceCardNumber(this.gameState.flop[1]) + this.getSuitLetter(this.gameState.flop[1]) + " | ";
    flopString += this.getFaceCardNumber(this.gameState.flop[2]) + this.getSuitLetter(this.gameState.flop[2]);

    return flopString
  }

  printTurn() {
    var turnString = " - ";
    turnString += this.getFaceCardNumber(this.gameState.turn) + this.getSuitLetter(this.gameState.turn);
    return turnString;
  }

  printRiver() {
    var turnString = " - ";
    turnString += this.getFaceCardNumber(this.gameState.river) + this.getSuitLetter(this.gameState.river);
    return turnString;
  }

  startNewHand() {
    this.gameActionService.startHand();
  }

  getFaceCardNumber(card: Card) {
    if(card == null) {
      return "X"; 
    }
    if(card.number == 11) {
      return "J"; 
    } else if(card.number == 12) {
      return "Q"; 
    } else if(card.number == 13) {
      return "K"; 
    } else if(card.number == 14) {
      return "A";
    }
    return card.number;
  }

  getSuitLetter(card: Card) {
    if(card == null) {
      return "X"; 
    }
    if(card.suit == 1) {
      return "s"; 
    } else if(card.suit == 2) {
      return "d"; 
    } else if(card.suit == 3) {
      return "c"; 
    } else if(card.suit ==4) {
      return "h"
    } 
    return "";
  }

}
