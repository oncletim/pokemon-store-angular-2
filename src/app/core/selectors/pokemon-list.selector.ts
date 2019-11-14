import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { State } from '../reducers/pokemon-list.reducer';
import { getEntry } from '../models/pokemon-entry';

export const root = (state: AppState): State => state.pokemons;

export const getPokemons = createSelector(
  root,
  (state: State) => state.pokemons.map(pokemon => getEntry(pokemon))
);

export const getLimit = createSelector(
  root,
  (state: State) => state.limit
);

export const getOffset = createSelector(
  root,
  (state: State) => state.offset
);
