import * as PokemonListActions from '../actions/pokemon-list.actions';
import { Pokemon } from '../models/pokemon';

export interface State {
  pokemons: Pokemon[];
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
        pokemons: [...state.pokemons],
        isInProgress: true,
        error: null,
        offset: action.payload.offset,
        limit: action.payload.limit
      };
    case PokemonListActions.PokemonListActionsTypes.FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        pokemons: [...state.pokemons],
        isInProgress: false,
        error: action.payload
      };
    case PokemonListActions.PokemonListActionsTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.pokemons],
        isInProgress: false,
        error: null
      };
    default:
      return state;
  }
}
