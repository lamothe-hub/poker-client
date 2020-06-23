import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { JohnnysTableComponent } from './components/johnnys-table/johnnys-table.component';


const routes: Routes = [
  { path: "join", component: LobbyComponent },
  { path: "johnny", component: JohnnysTableComponent },
  { path: "**", component: OverviewTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
