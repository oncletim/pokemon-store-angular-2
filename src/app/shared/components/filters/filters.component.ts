import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() typeId = new EventEmitter<number>();
  types$: Observable<string[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types$ = this.pokemonService.fetchTypes();
  }

  onChangeType(event) {
    this.typeId.emit(+event.target.value);
  }
}
