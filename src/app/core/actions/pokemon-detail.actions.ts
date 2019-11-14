import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';

export enum PokemonDetailActionsTypes {
  FETCH_POKEMON_DETAIL_REQUEST = '[Pokemon] Fetch pokemon detail request',
  FETCH_POKEMON_DETAIL_FAILURE = '[Pokemon] Fetch pokemon detail failure',
  FETCH_POKEMON_DETAIL_SUCCESS = '[Pokemon] Fetch pokemon detail success'
}

export class FetchPokemonDetailRequest implements Action {
  readonly type = PokemonDetailActionsTypes.FETCH_POKEMON_DETAIL_REQUEST;
  constructor(public payload: number) {}
}
export class FetchPokemonDetailFailure implements Action {
  readonly type = PokemonDetailActionsTypes.FETCH_POKEMON_DETAIL_FAILURE;
  constructor(public payload: string) {}
}
export class FetchPokemonDetailSuccess implements Action {
  readonly type = PokemonDetailActionsTypes.FETCH_POKEMON_DETAIL_SUCCESS;
  constructor(public payload: Pokemon) {}
}

export type PokemonDetailActions =
  | FetchPokemonDetailRequest
  | FetchPokemonDetailFailure
  | FetchPokemonDetailSuccess;
