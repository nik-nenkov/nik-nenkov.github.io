import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronosComponent} from "./chronos/chronos.component";
import {HousingMapComponent} from "./housing-map/housing-map.component";
import {SnakeGameComponent} from "./snake-game/snake-game.component";
import {SportsDataComponent} from "./sports-data/sports-data.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'housing', component: HousingMapComponent },
  { path: 'chronos', component: ChronosComponent },
  { path: 'sports', component: SportsDataComponent },
  { path: 'game', component: SnakeGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
