import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { JohnnysTableComponent } from './components/johnnys-table/johnnys-table.component';
import { CreateComponent } from './components/create/create.component';
import { JeffreysTableComponent } from './components/jeffreys-table/jeffreys-table.component';


const routes: Routes = [
  { path: "join", component: LobbyComponent },
  { path: "johnny", component: JohnnysTableComponent },
  { path: "jeffrey", component: JeffreysTableComponent },
  { path: "create", component: CreateComponent },
  { path: "**", component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
