import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { State } from '../reducers/pokemon-list.reducer';

export const root = (state: AppState): State => state.pokemons;

export const getPokemonList = createSelector(
  root,
  (state: State) => state.pokemons
);
