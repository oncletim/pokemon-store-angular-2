import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './list/list.component';
import { PokemonCardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
    // canActivate: [AuthGuard],
    // children: []
  }
];

@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class PokemonListModule {}
