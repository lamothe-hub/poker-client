import { Component, OnInit, Inject } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  errorMessage: string = "";

  constructor( private managementService: ManagementService,
    private stateService: StateService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  enterPlayer(playerName: string, buyinAmount: number) {
    this.managementService.addPlayer(playerName, buyinAmount).subscribe( response => {
      this.errorMessage = "";
      console.log(playerName + " has been successfully added...");
      //this.stateService.gameState.next(response);
      sessionStorage.setItem("playerName", playerName);
      this.router.navigate(['/overview']);
    }, error => {
      this.errorMessage = "That name is already taken.";
      console.error("Error: " + error.error);
    });
  }

}
