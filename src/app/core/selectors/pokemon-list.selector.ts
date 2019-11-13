import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { State } from '../reducers/pokemon-list.reducer';
import { getList } from '../models/pokemon-list';

export const root = (state: AppState): State => state.pokemons;

export const getPokemonList = createSelector(
  root,
  (state: State) => getList(state.pokemons)
);

export const getLimit = createSelector(
  root,
  (state: State) => state.limit
);

export const getOffset = createSelector(
  root,
  (state: State) => state.offset
);
