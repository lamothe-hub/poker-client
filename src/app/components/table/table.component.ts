import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { GameState } from 'src/app/model';
import { GameActionService } from 'src/app/services/game-action.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  gameState: GameState;

  constructor(private stateService: StateService, private gameActionService: GameActionService) { }

  ngOnInit(): void {

    this.stateService.getState();


    this.stateService.gameState.subscribe( newGameState => {
        this.gameState = newGameState;
    }); 

    
  }

  startNewHand() {
    this.gameActionService.startHand();
  }
    

  

}
