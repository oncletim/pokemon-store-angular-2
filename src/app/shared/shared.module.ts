import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HireMeComponent,
    PageNotFoundComponent,
    PreloaderComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HireMeComponent,
    PageNotFoundComponent,
    PreloaderComponent
  ],
  providers: []
})
export class SharedModule {}
