import { Component, Input } from '@angular/core';
import { PokemonStats } from 'src/app/core/models/pokemon-stats';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent {
  @Input() stats: PokemonStats;

  getStatPercentHP(value: number): number {
    return (value / 255) * 100;
  }
  getStatPercentAttack(value: number): number {
    return (value / 190) * 100;
  }
  getStatPercentDefense(value: number): number {
    return (value / 230) * 100;
  }
  getStatPercentSpecialAttack(value: number): number {
    return (value / 194) * 100;
  }
  getStatPercentSpecialDefense(value: number): number {
    return (value / 230) * 100;
  }
  getStatPercentSpeed(value: number): number {
    return (value / 180) * 100;
  }
}
