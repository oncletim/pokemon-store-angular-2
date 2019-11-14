import { PokemonEntry, getEntry } from './pokemon-entry';

export class PokemonList {
  pokemons: PokemonEntry[];
  count: number;
  constructor(pokemons: PokemonEntry[], count: number) {
    this.pokemons = pokemons;
    this.count = count;
  }
}

export const getList = (data: PokemonList) => {
  return new PokemonList(
    data.pokemons.map(pokemon => getEntry(pokemon)),
    data.count
  );
};
