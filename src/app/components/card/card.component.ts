import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  constructor() { }

  ngOnInit(): void {
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
