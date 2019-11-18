import * as CartActions from '../actions/cart.actions';
import { PokemonEntry } from '../models/pokemon-entry';
import { timeout } from 'q';

export interface State {
  items: PokemonEntry[];
}

const initialState: State = {
  items: []
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions
) {
  switch (action.type) {
    case CartActions.CartActionsTypes.ADD_ITEM:
      if (action.payload.quantity > 0) {
        action.payload.quantity++;
        return { ...state, items: [...state.items] };
      } else {
        action.payload.quantity = 1;
        return { ...state, items: [...state.items, action.payload] };
      }
    case CartActions.CartActionsTypes.REMOVE_ITEM:
      if (action.payload.quantity > 1) {
        action.payload.quantity--;
        return { ...state, items: [...state.items] };
      } else {
        return {
          ...state,
          items: state.items.filter(item => {
            return item.id !== action.payload.id;
          })
        };
      }
    case CartActions.CartActionsTypes.DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload.id;
        })
      };
    case CartActions.CartActionsTypes.DELETE_ALL_ITEMS:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
