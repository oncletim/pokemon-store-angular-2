import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonEntry } from '../models/pokemon-entry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<
    PokemonEntry[]
  > = new BehaviorSubject([]);
  private itemsInCart: PokemonEntry[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(data => (this.itemsInCart = data));
  }

  addPokemonToCart(item: PokemonEntry) {
    const currentItems = [...this.itemsInCart];
    const findItem = currentItems.find(data => data.id === item.id);
    if (findItem) {
      item.quantity += 1;
    } else {
      this.itemsInCartSubject.next([...this.itemsInCart, item]);
    }
  }

  public removeOneFromCart(item: PokemonEntry) {
    const currentItems = [...this.itemsInCart];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      const itemsWithoutRemoved = currentItems.filter(
        data => data.id !== item.id
      );
      this.itemsInCartSubject.next(itemsWithoutRemoved);
    }
  }

  public removeMoreFromCart(item: PokemonEntry) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(
      data => data.id !== item.id
    );
    this.itemsInCartSubject.next(itemsWithoutRemoved);
    item.quantity = 0;
  }

  public removeAllFromCart() {
    const currentItems = [];
  }

  public getItems(): Observable<PokemonEntry[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalItem(): Observable<number> {
    return this.itemsInCartSubject.pipe(
      map((items: PokemonEntry[]) => {
        return items.reduce((prev, curr: PokemonEntry) => {
          return prev + curr.quantity;
        }, 0);
      })
    );
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(
      map((items: PokemonEntry[]) => {
        return items.reduce((prev, curr: PokemonEntry) => {
          return prev + curr.price * curr.quantity;
        }, 0);
      })
    );
  }
}
