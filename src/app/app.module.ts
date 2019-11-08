import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-list/card/card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PokemonAbilityComponent } from './pokemon-detail/pokemon-ability/pokemon-ability.component';
import { PokemonDescriptionComponent } from './pokemon-detail/pokemon-description/pokemon-description.component';
import { PokemonStatsComponent } from './pokemon-detail/pokemon-stats/pokemon-stats.component';
import { PokemonTypesComponent } from './pokemon-detail/pokemon-types/pokemon-types.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { HireMeComponent } from './shared/components/hire-me/hire-me.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PokemonListComponent } from './pokemon-list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonListComponent,
    ShoppingCartComponent,
    PokemonAbilityComponent,
    PokemonDescriptionComponent,
    PokemonStatsComponent,
    PokemonTypesComponent,
    PokemonDetailComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HireMeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
