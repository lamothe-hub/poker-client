import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errorMessage = "";
  constructor( private managementService: ManagementService, 
    private stateService: StateService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createGame(playerName: string, buyinAmount: number, maxBuyin: number) {
    this.managementService.createGame(playerName, buyinAmount, maxBuyin).subscribe( state => {
      console.log("Game created successfully");
      this.stateService.gameState.next(state);
      sessionStorage.setItem("playerName", playerName);
      this.router.navigate(['/jeffrey']);
    }, error => {
      console.error(error.error);
    })
  }

}
