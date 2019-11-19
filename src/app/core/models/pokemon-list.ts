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

export const getListByTypes = (data: PokemonEntry[], typeId: number) => {
  console.log(data);
  console.log(typeId);

  if (typeId === 0) {
    return data;
  } else {
    return data.filter(p => p.type === typeId);
  }
};
