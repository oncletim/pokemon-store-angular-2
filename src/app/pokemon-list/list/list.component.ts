import {
  getOffset,
  getLimit,
  getPokemons,
  getIsInProgress
} from './../../core/selectors/pokemon-list.selector';
import { Observable, combineLatest } from 'rxjs';
import { AppState } from './../../core/reducers/app.reducer';
import { Component, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models/pokemon-entry';
import { Store } from '@ngrx/store';
import * as PokemonListActions from 'src/app/core/actions/pokemon-list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<PokemonEntry[]>;
  isInProgress$: Observable<boolean>;
  offset$: Observable<number>;
  limit$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.offset$ = this.store.select(getOffset);
    this.limit$ = this.store.select(getLimit);
    this.pokemons$ = this.store.select(getPokemons);
    this.isInProgress$ = this.store.select(getIsInProgress);

    combineLatest(this.offset$, this.limit$).subscribe(([offset, limit]) => {
      this.store.dispatch(
        new PokemonListActions.FetchPokemonsRequest({ offset, limit })
      );
    });
  }

  // onPageChange(offset$) {
  //   this.offset$ = offset$;
  //   this.findAll(offset$, this.limit$);
  // }
}
