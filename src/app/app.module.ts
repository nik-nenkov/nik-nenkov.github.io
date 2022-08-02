import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChronosComponent } from './chronos/chronos.component';
import { SportsDataComponent } from './sports-data/sports-data.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { HousingMapComponent } from './housing-map/housing-map.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChronosComponent,
    SportsDataComponent,
    SnakeGameComponent,
    HousingMapComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
