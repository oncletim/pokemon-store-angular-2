import * as PokemonDetailActions from '../actions/pokemon-detail.actions';
import { Pokemon } from '../models/pokemon';

export interface State {
  pokemon: Pokemon;
  isInProgress: boolean;
  error: string;
}

const initialState: State = {
  pokemon: null,
  isInProgress: false,
  error: null
};

export function pokemonDetailReducer(
  state: State = initialState,
  action: PokemonDetailActions.PokemonDetailActions
) {
  switch (action.type) {
    case PokemonDetailActions.PokemonDetailActionsTypes
      .FETCH_POKEMON_DETAIL_REQUEST:
      return {
        ...state,
        pokemon: null,
        isInProgress: true,
        error: null
      };
    case PokemonDetailActions.PokemonDetailActionsTypes
      .FETCH_POKEMON_DETAIL_FAILURE:
      return {
        ...state,
        pokemon: null,
        isInProgress: false,
        error: action.payload
      };
    case PokemonDetailActions.PokemonDetailActionsTypes
      .FETCH_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.pokemon,
        isInProgress: false,
        error: null
      };
    default:
      return state;
  }
}
