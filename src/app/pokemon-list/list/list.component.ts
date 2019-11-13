import {
  getOffset,
  getLimit
} from './../../core/selectors/pokemon-list.selector';
import { Observable, combineLatest } from 'rxjs';
import { AppState } from './../../core/reducers/app.reducer';
import { Component, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Store } from '@ngrx/store';
import * as fromPokemonList from '.';
import * as actions from 'src/app/core/actions/pokemon-list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonEntry[];
  count: number = 0;
  offset$: Observable<number>;
  limit$: Observable<number>;

  loading: boolean = true;

  constructor(
    private _service: PokemonService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.offset$ = this.store.select(getOffset);
    this.limit$ = this.store.select(getLimit);
    combineLatest(this.offset$, this.limit$).subscribe(([offset, limit]) => {
      this.store.dispatch(new actions.FetchPokemonsRequest({ offset, limit }));
    });
    // this.findAll(this.offset, this.limit);
  }

  // findAll(offset: number, limit: number) {
  //   this.pokemons = [];
  //   this._service.findAll(offset, limit).subscribe(result => {
  //     this.pokemons = result.pokemons;
  //     this.count = result.count;
  //     this.loading = false;
  //   });
  // }

  onPageChange(offset) {
    this.offset = offset;
    this.findAll(offset, this.limit);
  }
}
