import { Component, OnInit, Input } from '@angular/core';
import { PokemonAbilityInfo } from 'src/app/core/models/pokemon-ability-info';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.scss']
})
export class PokemonAbilityComponent implements OnInit {
  constructor() {}
  @Input() info: PokemonAbilityInfo;
  @Input() entry: PokemonEntry;

  ngOnInit() {}
}
