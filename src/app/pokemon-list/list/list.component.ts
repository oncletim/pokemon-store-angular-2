import {
  getOffset,
  getLimit,
  getPokemons
} from './../../core/selectors/pokemon-list.selector';
import { Observable, combineLatest } from 'rxjs';
import { AppState } from './../../core/reducers/app.reducer';
import { Component, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { Store } from '@ngrx/store';
import * as PokemonActions from 'src/app/core/actions/pokemon-list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<PokemonEntry[]>;
  offset$: Observable<number>;
  limit$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.offset$ = this.store.select(getOffset);
    this.limit$ = this.store.select(getLimit);
    combineLatest(this.offset$, this.limit$).subscribe(([offset, limit]) => {
      this.store.dispatch(
        new PokemonActions.FetchPokemonsRequest({ offset, limit })
      );
    });
    this.pokemons$ = this.store.select(getPokemons);
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

  // onPageChange(offset$) {
  //   this.offset$ = offset$;
  //   this.findAll(offset$, this.limit$);
  // }
}
