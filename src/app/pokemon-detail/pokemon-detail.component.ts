import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../core/models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../core/services/pokemon.service';
import { CartService } from '../core/services/cart.service';
import { PokemonEntry } from '../core/models/pokemon-entry';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _service: PokemonService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._service.findOne(id).subscribe(pokemon => {
      (this.pokemon = pokemon), (this.loading = false);
    });
  }

  public addToCart(pokemon: PokemonEntry) {
    this._cart.addPokemonToCart(pokemon);
  }
}
