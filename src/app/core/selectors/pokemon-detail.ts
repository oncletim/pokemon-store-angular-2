import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { State } from '../reducers/pokemon-detail.reducer';

export const root = (state: AppState): State => state.pokemon;

export const getPokemonDetail = createSelector(
  root,
  (state: State) => state.pokemon
);

export const getIsInProgress = createSelector(
  root,
  (state: State) => state.isInProgress
);
