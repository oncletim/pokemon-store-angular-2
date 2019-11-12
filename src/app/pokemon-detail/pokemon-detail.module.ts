import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { PokemonAbilityComponent } from './pokemon-ability/pokemon-ability.component';
import { PokemonDescriptionComponent } from './pokemon-description/pokemon-description.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { PokemonDetailComponent } from './pokemon-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: PokemonDetailComponent
    // canActivate: [AuthGuard],
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, FormsModule],
  exports: [],
  declarations: [
    PokemonAbilityComponent,
    PokemonDescriptionComponent,
    PokemonStatsComponent,
    PokemonTypesComponent,
    PokemonDetailComponent
  ]
})
export class PokemonDetailModule {}
