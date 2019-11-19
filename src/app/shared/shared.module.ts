import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomToastComponent } from './components/custom-toast.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HireMeComponent,
    PageNotFoundComponent,
    PreloaderComponent,
    CustomToastComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent
    })
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HireMeComponent,
    PageNotFoundComponent,
    PreloaderComponent,
    CustomToastComponent,
    PaginationComponent
  ],
  providers: [],
  entryComponents: [CustomToastComponent]
})
export class SharedModule {}
