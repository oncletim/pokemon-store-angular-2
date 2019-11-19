import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/core/models/pokemon-type';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss']
})
export class PokemonTypesComponent {
  private _colors = {
    poison: 'purple',
    ground: 'brown',
    normal: 'grey',
    fighting: 'red',
    flying: 'blue',
    rock: 'brown',
    bug: 'green',
    ghost: 'purple',
    steel: 'blue-grey',
    fire: 'red',
    water: 'blue',
    grass: 'green',
    electric: 'gold',
    psychic: ' pink',
    ice: 'blue',
    dragon: 'purple',
    dark: 'black',
    fairy: 'pink'
  };
  @Input() types: PokemonType[];

  getColor(type: PokemonType) {
    return this._colors[type.type];
  }
}
