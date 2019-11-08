import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PokemonCardComponent } from './pokemon-list/card/card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HireMeComponent } from './shared/components/hire-me/hire-me.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PokemonListComponent } from './pokemon-list/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'hire-me', component: HireMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
