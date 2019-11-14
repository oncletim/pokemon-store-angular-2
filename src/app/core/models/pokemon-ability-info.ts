import { PokemonAbility } from './pokemon-ability';
import { environment } from 'src/environments/environment';

export class PokemonAbilityInfo {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  category: string;

  constructor(
    height: number,
    weight: number,
    abilities: PokemonAbility[],
    category: string
  ) {
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.category = category;
  }
}

export const getCategory = (genera: any[]): string => {
  return genera.find(genera => genera.language.name === environment.language)
    .genus;
};
