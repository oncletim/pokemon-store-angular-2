export class PokemonEntry {
  id: number;
  name: string;
  sprite: string;
  price: number;
  quantity: number;
  type: number;

  constructor(id: number, name: string, sprite: string) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
    this.price = this.generatePrice();
    this.quantity = 0;
    this.type = Math.floor(Math.random() * 10);
  }

  private generatePrice() {
    const prices: number[] = [
      3.99,
      4.99,
      6.99,
      7.99,
      9.99,
      12.99,
      14.99,
      16.99,
      19.99
    ];
    let rand = Math.random();
    let totalPrices = prices.length;
    let randomIndex = Math.floor(rand * totalPrices);
    return prices[randomIndex];
  }
}

export const getEntry = (data): PokemonEntry => {
  const detailRegex: RegExp = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;
  const spriteBaseUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';
  const matches = detailRegex.exec(data.url);
  const id = matches == null ? null : +matches[1];
  const sprite = id == null ? null : `${spriteBaseUrl}/${id}.png`;
  return new PokemonEntry(id, data.name.toUpperCase(), sprite);
};
