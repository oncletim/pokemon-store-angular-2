import * as PokemonListActions from '../actions/pokemon-list.actions';

import { PokemonEntry } from '../models/pokemon-entry';

export interface State {
  pokemons: PokemonEntry[];
  isInProgress: boolean;
  error: string;
  offset: number;
  limit: number;
}

const initialState: State = {
  pokemons: [],
  isInProgress: false,
  error: null,
  offset: 0,
  limit: 20
};

export function pokemonListReducer(
  state: State = initialState,
  action: PokemonListActions.PokemonListActions
) {
  switch (action.type) {
    case PokemonListActions.PokemonListActionsTypes.FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isInProgress: true,
        error: null,
        offset: action.payload.offset,
        limit: action.payload.limit
      };
    case PokemonListActions.PokemonListActionsTypes.FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isInProgress: false,
        error: action.payload
      };
    case PokemonListActions.PokemonListActionsTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        isInProgress: false,
        error: null
      };
    case PokemonListActions.PokemonListActionsTypes.EDIT_OFFSET:
      return {
        ...state,
        offset: action.payload
      };
    default:
      return state;
  }
}
