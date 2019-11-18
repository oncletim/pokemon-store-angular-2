import { PokemonEntry, getEntry } from './pokemon-entry';

export class PokemonList {
  pokemons: PokemonEntry[];
  quantity: number;
  constructor(pokemons: PokemonEntry[]) {
    this.pokemons = pokemons;
  }
}

export const getList = (data: PokemonList) => {
  return new PokemonList(data.pokemons.map(pokemon => getEntry(pokemon)));
};
