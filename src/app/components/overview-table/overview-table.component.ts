import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { GameState, Card } from 'src/app/model';
import { GameActionService } from 'src/app/services/game-action.service';
import { ManagementService } from 'src/app/services/management.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class OverviewTableComponent implements OnInit {

  gameState: GameState;

  subscription: Subscription;
  constructor(private stateService: StateService, private gameActionService: GameActionService, 
    private managementService: ManagementService) { }

  ngOnInit(): void {

    this.stateService.getStateForPlayer("jeffrey");

    this.stateService.gameState.subscribe( newGameState => {
        this.gameState = newGameState;
    }); 

    this.subscription = interval(1000).subscribe(val => {
      this.stateService.getMasterState();
    })
    
  }

  addPlayer(playerName: string, playerAmount: number) {
    console.log(playerName + " is the name and the number is " + playerAmount);
    this.managementService.addPlayer(playerName, playerAmount);
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
