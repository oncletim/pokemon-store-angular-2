import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as PokemonDetailActions from '../actions/pokemon-detail.actions';

import { PokemonService } from '../services/pokemon.service';
import { PokemonDetailActionsTypes } from '../actions/pokemon-detail.actions';

@Injectable()
export class PokemonDetailEffects {
  constructor(
    private action$: Actions,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  fetchPokemonDetail = this.action$.pipe(
    ofType<PokemonDetailActions.FetchPokemonDetailRequest>(
      PokemonDetailActionsTypes.FETCH_POKEMON_DETAIL_REQUEST
    ),
    switchMap(action =>
      this.pokemonService.fetchPokemon(action.payload).pipe(
        map(
          pokemon => new PokemonDetailActions.FetchPokemonDetailSuccess(pokemon)
        ),
        catchError(err =>
          of(new PokemonDetailActions.FetchPokemonDetailFailure(err))
        )
      )
    )
  );
}
