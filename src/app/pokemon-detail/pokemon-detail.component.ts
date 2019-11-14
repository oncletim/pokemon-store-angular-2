import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../core/models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../core/services/pokemon.service';
import { CartService } from '../core/services/cart.service';
import { PokemonEntry } from '../core/models/pokemon-entry';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../core/reducers/app.reducer';
import {
  getPokemonDetail,
  getIsInProgress
} from '../core/selectors/pokemon-detail';
import * as PokemonDetailActions from './../core/actions/pokemon-detail.actions';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  isInProgress$: Observable<boolean> = of(true);

  constructor(
    private route: ActivatedRoute,
    private _cart: CartService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.store.select(getPokemonDetail);
    this.isInProgress$ = this.store.select(getIsInProgress);
    this.pokemon$.subscribe(t => console.log(t));
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new PokemonDetailActions.FetchPokemonDetailRequest(id));
  }

  public addToCart(pokemon: PokemonEntry) {
    this._cart.addPokemonToCart(pokemon);
  }
}
