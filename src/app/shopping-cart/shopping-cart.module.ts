import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
    // canActivate: [AuthGuard],
    // children: []
  }
];

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class ShoppingCartModule {}
