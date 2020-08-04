import { Component, OnInit } from '@angular/core';
import { GameState, Card } from 'src/app/model';
import { Subscription, interval } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { GameActionService } from 'src/app/services/game-action.service';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-johnnys-table',
  templateUrl: './johnnys-table.component.html',
  styleUrls: ['./johnnys-table.component.css']
})
export class JohnnysTableComponent implements OnInit {


  gameState: GameState;
  
  subscription: Subscription;
  constructor(private stateService: StateService, private gameActionService: GameActionService, 
    private managementService: ManagementService) { }

  ngOnInit(): void {
    
    let currPlayerName = sessionStorage.getItem("playerName")
    if(currPlayerName) {
      this.stateService.getStateForPlayer(currPlayerName);
    }

    this.stateService.gameState.subscribe( newGameState => {
        this.gameState = newGameState;
    }); 

    this.subscription = interval(1000).subscribe(val => {
      let playerName = sessionStorage.getItem("playerName");
      console.log("triggerring the interval");
      if(this.gameState.runStatus === "end") {
        console.log("In the end if statement");
        this.stateService.getStateForPlayer(playerName); 
      } else {
          if(playerName != null) {
          console.log("Refresh the game state for " + playerName);
          this.stateService.getStateForPlayer(playerName);
        } else {
          console.log("Could not refresh")
        }
      }
      
    })
    
  }

  addPlayer(playerName: string, playerAmount: number) {
    this.managementService.addPlayer(playerName, playerAmount);
  }

  isMaster() {
    let playerName = sessionStorage.getItem("playerName"); 
    if(playerName === this.stateService.gameState.value["masterName"] ) {
      return true;
    }
    return false;
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
      return ""; 
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
  isSpade(card: Card) {
    if(card == null)
    return false;
    if (card.suit == 1) return true;
    return false;
  }
  isDiamond(card: Card) {
    if(card == null)
    return false;
    if(card.suit == 2) return true;
    return false;
  }
  isClub(card: Card) {
    if(card == null)
    return false;
    if(card.suit == 3) return true;
    return false;
  }
  isHeart(card: Card) {
    if(card == null)
    return false;
    if(card.suit == 4) return true;
    return false;
  }

}
