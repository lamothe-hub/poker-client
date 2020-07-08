import { Component, OnInit, Input } from '@angular/core';
import { GameState, Player} from 'src/app/model';

@Component({
  selector: 'app-poker-table',
  templateUrl: './poker-table.component.html',
  styleUrls: ['./poker-table.component.css']
})
export class PokerTableComponent implements OnInit {

  constructor() { }

  @Input() player: Player;
  @Input() gameState: GameState;
  ngOnInit(): void {
  }

}
