import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonEntry } from '../models/pokemon-entry';
import { Pokemon } from '../models/pokemon';
import {
  PokemonAbilityInfo,
  getCategory
} from '../models/pokemon-ability-info';
import { getAbilities } from '../models/pokemon-ability';
import { getDescriptions } from '../models/pokemon-description';
import { getTypes } from '../models/pokemon-type';
import { getStats } from '../models/pokemon-stats';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl: string = 'http://pokeapi.co/api/v2';
  private _spriteBaseUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';

  constructor(private http: HttpClient) {}

  fetchPokemons(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get<any>(
      `${this._baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  fetchPokemon(id: number): Observable<any> {
    const response1 = this.http.get<any>(`${this._baseUrl}/pokemon/${id}/`);
    const response2 = this.http.get<any>(
      `${this._baseUrl}/pokemon-species/${id}/`
    );
    const result = forkJoin([response1, response2]).pipe(
      map(
        data =>
          new Pokemon(
            new PokemonEntry(
              data[0].id,
              (data[0].name as string).toUpperCase(),
              `${this._spriteBaseUrl}/${data[0].id}.png`
            ),
            new PokemonAbilityInfo(
              data[0].height,
              data[0].weight,
              getAbilities(data[0].abilities),
              getCategory(data[1].genera)
            ),
            getDescriptions(data[1]['flavor_text_entries']),
            getTypes(data[0].types),
            getStats(data[0].stats)
          )
      )
    );
    return result;
  }
}
