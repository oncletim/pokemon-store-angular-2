import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';

export enum CartActionsTypes {
  ADD_ITEM = '[Cart] Add Item',
  DELETE_ITEM = '[Cart] Delete Item',
  DELETE_ITEMS = '[Cart] Delete Items',
  DELETE_ITEMS_ALL = '[Cart] Delete All Items'
}

export class AddItem implements Action {
  readonly type = CartActionsTypes.ADD_ITEM;
  constructor(public payload: { pokemon: Pokemon; counter: number }) {}
}

export class DeleteItem implements Action {
  readonly type = CartActionsTypes.DELETE_ITEM;
}

export class DeleteItems implements Action {
  readonly type = CartActionsTypes.DELETE_ITEMS;
}

export class DeleteAllItems implements Action {
  readonly type = CartActionsTypes.DELETE_ITEMS_ALL;
}

export type CartActions = AddItem | DeleteItem | DeleteItems | DeleteAllItems;
