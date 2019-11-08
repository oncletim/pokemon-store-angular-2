import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonEntry } from '../core/models/pokemon-entry';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCartItems$: Observable<PokemonEntry[]> = of([]);
  public shoppingCartItems: PokemonEntry[] = [];

  loading: boolean = true;
  empty: boolean = true;
  free: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => (this.shoppingCartItems = _));
    this.shoppingCartItems.length > 0
      ? (this.empty = false)
      : (this.empty = true);
    this.loading = false;
  }

  public getTotalAmount(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public getTotalItem(): Observable<number> {
    return this.cartService.getTotalItem();
  }

  public removeOneItem(item: PokemonEntry) {
    this.cartService.removeOneFromCart(item);
  }

  public removeMoreItem(item: PokemonEntry) {
    this.cartService.removeMoreFromCart(item);
  }

  public addItem(item: PokemonEntry) {
    this.cartService.addPokemonToCart(item);
  }
}
