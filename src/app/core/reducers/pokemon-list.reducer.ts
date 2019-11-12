import * as PokemonListActions from '../actions/pokemon-list.actions';
import { Pokemon } from '../models/pokemon';

export interface State {
  pokemons: Pokemon[];
  isInProgress: boolean;
  error: string;
}

const initialState: State = {
  pokemons: [],
  isInProgress: false,
  error: null
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
        error: null
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
