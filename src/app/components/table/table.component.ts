import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { GameState } from 'src/app/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  gameState: GameState;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {

    this.stateService.getState();


    this.stateService.gameState.subscribe( newGameState => {
        this.gameState = newGameState;
    }); 
    
  }
  

}
