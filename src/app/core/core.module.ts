import { NgModule } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  providers: [
    PokemonService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ]
})
export class CoreModule {}
