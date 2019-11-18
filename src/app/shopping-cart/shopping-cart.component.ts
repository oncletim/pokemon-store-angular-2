import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { getItems, getTotalAmount } from '../core/selectors/cart.selector';
import { getTotalItem } from 'src/app/core/selectors/cart.selector';
import * as CartActions from 'src/app/core/actions/cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public items$: Observable<PokemonEntry[]>;
  public totalItems$: Observable<number>;
  public totalAmount$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.items$ = this.store.select(getItems);
    this.totalItems$ = this.store.select(getTotalItem);
    this.totalAmount$ = this.store.select(getTotalAmount);
  }

  public addItem(item: PokemonEntry) {
    this.store.dispatch(new CartActions.AddItem(item));
  }

  public removeItem(item: PokemonEntry) {
    this.store.dispatch(new CartActions.RemoveItem(item));
  }

  public deleteItems(item: PokemonEntry) {
    this.store.dispatch(new CartActions.DeleteItems(item));
  }
}
