export class PokemonType {
  type: string;
  order: number;

  constructor(type: string, order: number) {
    this.type = type;
    this.order = order;
  }
}

export const getTypes = (types: any[]): PokemonType[] => {
  return types
    .map(type => new PokemonType(type.type.name, type.slot))
    .sort((type1, type2) => type1.order - type2.order);
};
