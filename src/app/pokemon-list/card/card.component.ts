import { Component, OnInit, Input } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true; // if we want use the component just for description

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  public addToCart(pokemon: PokemonEntry) {
    this.cartService.addPokemonToCart(pokemon);
  }
}
