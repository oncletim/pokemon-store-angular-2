export class PokemonAbility {
  name: string;
  hidden: boolean;
  order: number;

  constructor(name: string, hidden: boolean, order: number) {
    this.name = name;
    this.hidden = hidden;
    this.order = order;
  }
}

export const getAbilities = (abilities: any[]): PokemonAbility[] => {
  return abilities
    .map(
      ability =>
        new PokemonAbility(
          ability.ability.name,
          ability['is_hidden'],
          ability.slot
        )
    )
    .sort((ability1, ability2) => ability1.order - ability2.order);
};
