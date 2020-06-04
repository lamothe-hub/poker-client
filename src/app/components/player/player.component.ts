import { Component, OnInit, Input } from '@angular/core';
import { GameState, Player, Card } from 'src/app/model';
import { PlayerActionService } from 'src/app/services/player-action.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor(private playerActionService: PlayerActionService, 
    private stateService: StateService) { }

  ngOnInit(): void {
  }

  printHand(hand) {
    var handString = "";
    handString = this.getFaceCardNumber(hand.cardA) +  this.getSuitLetter(hand.cardA) + " | ";
    handString = handString + this.getFaceCardNumber(hand.cardB) +  this.getSuitLetter(hand.cardB)
    return handString;
  }

  check(player: Player) {
    this.playerActionService.check(player.name);

  }

  call(player: Player) {

    let callAmount = 0; 
    if(player.chipCount + player.currAmountThisRound >= this.stateService.gameState.value.mostRecentBetSize) {
      callAmount = this.stateService.gameState.value.mostRecentBetSize - player.currAmountThisRound;
    } else {
      callAmount = player.chipCount;
    }

    this.playerActionService.call(player.name, callAmount);

  }

  fold(player: Player) {
    this.playerActionService.fold(player.name);
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
