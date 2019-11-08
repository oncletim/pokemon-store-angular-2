import { Component, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonEntry[];
  count: number = 0;
  offset: number = 0;
  limit: number = 20;

  loading: boolean = true;

  constructor(private _service: PokemonService) {}

  ngOnInit() {
    this.findAll(this.offset, this.limit);
  }

  findAll(offset: number, limit: number) {
    this.pokemons = [];
    this._service.findAll(offset, limit).subscribe(result => {
      this.pokemons = result.pokemons;
      this.count = result.count;
      this.loading = false;
    });
  }

  onPageChange(offset) {
    this.offset = offset;
    this.findAll(offset, this.limit);
  }
}
