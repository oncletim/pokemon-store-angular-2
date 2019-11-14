import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { PokemonList } from '../models/pokemon-list';
import { PokemonEntry } from '../models/pokemon-entry';
import { Pokemon } from '../models/pokemon';
import { PokemonAbilityInfo } from '../models/pokemon-ability-info';
import { PokemonAbility } from '../models/pokemon-ability';
import { PokemonDescription } from '../models/pokemon-description';
import { PokemonType } from '../models/pokemon-type';
import { PokemonStats } from '../models/pokemon-stats';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl: string = 'http://pokeapi.co/api/v2';
  private _spriteBaseUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';
  private _detailRegex: RegExp = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;
  private _language: string = 'en';

  constructor(private http: HttpClient) {}

  fetchPokemons(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get<any>(
      `${this._baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  findOne(id: number): Observable<Pokemon> {
    let response1 = this.http.get<any>(`${this._baseUrl}/pokemon/${id}/`);
    let response2 = this.http.get<any>(
      `${this._baseUrl}/pokemon-species/${id}/`
    );
    let myObservable = forkJoin([response1, response2]);
    return myObservable.pipe(
      map(
        data =>
          new Pokemon(
            new PokemonEntry(
              data[0].id,
              _.capitalize(data[0].name),
              `${this._spriteBaseUrl}/${data[0].id}.png`
            ),
            new PokemonAbilityInfo(
              data[0].height,
              data[0].weight,
              this.getAbilities(data[0].abilities),
              this.getCategory(data[1].genera)
            ),
            this.getDescriptions(data[1]['flavor_text_entries']),
            this.getTypes(data[0].types),
            this.getStats(data[0].stats)
          )
      )
    );
  }

  getAbilities(abilities: any[]): PokemonAbility[] {
    return abilities
      .map(
        ability =>
          new PokemonAbility(
            _.startCase(ability.ability.name),
            ability['is_hidden'],
            ability.slot
          )
      )
      .sort((ability1, ability2) => ability1.order - ability2.order);
  }

  getCategory(genera: any[]): string {
    return genera.find(genera => genera.language.name === this._language).genus;
  }

  getDescriptions(entries: any[]): PokemonDescription[] {
    return entries
      .filter(entry => entry.language.name === this._language)
      .map(
        entry =>
          new PokemonDescription(
            entry['flavor_text'],
            _.startCase(_.replace(entry.version.name, '-', ' '))
          )
      );
  }

  getTypes(types: any[]): PokemonType[] {
    return types
      .map(type => new PokemonType(type.type.name, type.slot))
      .sort((type1, type2) => type1.order - type2.order);
  }

  getStats(stats: any[]): PokemonStats {
    return new PokemonStats(
      stats.find(stat => stat.stat.name === 'hp')['base_stat'],
      stats.find(stat => stat.stat.name === 'attack')['base_stat'],
      stats.find(stat => stat.stat.name === 'defense')['base_stat'],
      stats.find(stat => stat.stat.name === 'special-attack')['base_stat'],
      stats.find(stat => stat.stat.name === 'special-defense')['base_stat'],
      stats.find(stat => stat.stat.name === 'speed')['base_stat']
    );
  }
}
