import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonEntry } from './core/models/pokemon-entry';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shoppingCartItems$: Observable<PokemonEntry[]>;

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => _);
  }
}
