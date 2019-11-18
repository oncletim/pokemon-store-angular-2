import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { Action } from '@ngrx/store';

export enum CartActionsTypes {
  ADD_ITEM = '[Cart] Add Item',
  REMOVE_ITEM = '[Cart] Remove Item',
  DELETE_ITEMS = '[Cart] Delete Items',
  DELETE_ALL_ITEMS = '[Cart] Delete All Items'
}

export class AddItem implements Action {
  readonly type = CartActionsTypes.ADD_ITEM;
  constructor(public payload: PokemonEntry) {}
}

export class RemoveItem implements Action {
  readonly type = CartActionsTypes.REMOVE_ITEM;
  constructor(public payload: PokemonEntry) {}
}

export class DeleteItems implements Action {
  readonly type = CartActionsTypes.DELETE_ITEMS;
  constructor(public payload: PokemonEntry) {}
}

export class DeleteAllItems implements Action {
  readonly type = CartActionsTypes.DELETE_ALL_ITEMS;
}

export type CartActions = AddItem | RemoveItem | DeleteItems | DeleteAllItems;
