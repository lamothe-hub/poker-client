export class GameState {
    playersList: Player[]; 
    runStatus: string; 
    dealerName: string; 
    masterName: string;
    flop: Card[];
    turn: Card; 
    river: Card;
    pot: number;
}

export class Player {
    name: string; 
    chipCount: number;
    currAmountThisRound: number; 
    currAmountInPot: number;
    currentHand: Card[]; 
    status: string; 
    nextPlayer: string;
}

export class Card {
    number: number; 
    suit: number;
}