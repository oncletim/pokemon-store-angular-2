import { Component, OnInit, Input } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducers/app.reducer';
import * as CartActions from 'src/app/core/actions/cart.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true; // if we want use the component just for description

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  public addToCart(item: PokemonEntry) {
    this.store.dispatch(new CartActions.AddItem(item));
  }
}
