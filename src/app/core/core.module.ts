import { NgModule } from '@angular/core';
import { CartService } from './services/cart.service';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  providers: [
    CartService,
    PokemonService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ]
})
export class CoreModule {}
