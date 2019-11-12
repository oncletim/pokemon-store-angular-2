import { ActionReducerMap } from '@ngrx/store';

import * as fromCart from './cart.reducer';
import * as fromPokemonDetail from './pokemon-detail.reducer';
import * as fromPokemonList from './pokemon-list.reducer';

export interface AppState {
  cart: fromCart.State;
  pokemon: fromPokemonDetail.State;
  pokemons: fromPokemonList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  pokemon: fromPokemonDetail.pokemonDetailReducer,
  pokemons: fromPokemonList.pokemonListReducer
};
