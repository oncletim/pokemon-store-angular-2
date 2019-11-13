import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';
import * as PokemonListActions from '../actions/pokemon-list.actions';

import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListActionsTypes } from '../actions/pokemon-list.actions';

@Injectable()
export class PokemonListEffects {
  constructor(
    private action$: Actions,
    private store: Store<fromApp.AppState>,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  fetchPokemonList = this.action$.pipe(
    ofType<PokemonListActions.FetchPokemonsRequest>(
      PokemonListActionsTypes.FETCH_POKEMONS_REQUEST
    ),
    switchMap(action =>
      this.pokemonService
        .findAll(action.payload.offset, action.payload.limit)
        .pipe(
          map(
            pokemons => new PokemonListActions.FetchPokemonsSuccess(pokemons)
          ),
          catchError(err =>
            of(new PokemonListActions.FetchPokemonsFailure(err))
          )
        )
    )
  );
}
