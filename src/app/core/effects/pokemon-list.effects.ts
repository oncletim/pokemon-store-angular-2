import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';
import * as PokemonListActions from '../actions/pokemon-list.actions';

import { PokemonService } from '../services/pokemon.service';
import { PokemonListActionsTypes } from '../actions/pokemon-list.actions';

@Injectable()
export class PokemonListEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  fetchPokemonList = this.action$.pipe(
    ofType<PokemonListActions.FetchPokemonsRequest>(
      PokemonListActionsTypes.FETCH_POKEMONS_REQUEST
    ),
    switchMap(action =>
      this.pokemonService
        .fetchPokemons(action.payload.offset, action.payload.limit)
        .pipe(
          map(
            pokemons =>
              new PokemonListActions.FetchPokemonsSuccess(pokemons.results)
          ),
          catchError(err =>
            of(new PokemonListActions.FetchPokemonsFailure(err))
          )
        )
    )
  );
}
