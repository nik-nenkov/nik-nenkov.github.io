import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronosComponent} from "./chronos/chronos.component";
import {HousingMapComponent} from "./housing-map/housing-map.component";
import {SnakeGameComponent} from "./snake-game/snake-game.component";
import {SportsDataComponent} from "./sports-data/sports-data.component";

const routes: Routes = [
  { path: 'chronos-tab', component: ChronosComponent },
  { path: 'sports-data', component: SportsDataComponent },
  { path: 'game-corner', component: SnakeGameComponent },
  { path: 'housing-map', component: HousingMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
