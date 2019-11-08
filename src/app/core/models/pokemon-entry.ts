export class PokemonEntry {
  id: number;
  name: string;
  sprite: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, sprite: string) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
    this.price = this.generatePrice();
    this.quantity = 1;
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
