import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ENV_CONFIG } from './core/config/env-config.token';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { CatalogModule } from './catalog';
import { InventoryModule } from './inventory';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    CatalogModule,
    InventoryModule
  ],
  providers: [
    { provide: ENV_CONFIG, useValue: environment.config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
