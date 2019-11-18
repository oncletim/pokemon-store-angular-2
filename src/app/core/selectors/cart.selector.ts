import { AppState } from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { State } from '../reducers/cart.reducer';

export const root = (state: AppState): State => state.cart;

export const getItems = createSelector(
  root,
  (state: State) => state.items
);

export const getTotalItem = createSelector(
  root,
  (state: State) =>
    state.items.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0)
);

export const getTotalAmount = createSelector(
  root,
  (state: State) =>
    state.items.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0)
);
