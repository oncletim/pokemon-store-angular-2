import * as CartActions from '../actions/cart.actions';
import { Pokemon } from '../models/pokemon';

export interface State {
  items: {
    pokemon: Pokemon;
    counter: number;
  }[];
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
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    // case CartActions.CartActionsTypes.DELETE_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.filter((item, index) => {
    //       return index !== action.;
    //     })
    //   };
    default:
      return state;
  }
}
