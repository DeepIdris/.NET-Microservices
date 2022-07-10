import { NgModule } from '@angular/core';
import { CatalogListComponent } from './containers/catalog-list/catalog-list.component';
import { CatalogListItemComponent } from './components/catalog-list-item/catalog-list-item.component';
import { CatalogListItemDetailComponent } from './components/catalog-list-item-detail/catalog-list-item-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogListItemComponent,
    CatalogListItemDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'catalog', component: CatalogListComponent },
      { path: 'catalog/:id', component: CatalogListItemDetailComponent },
    ]),
    SharedModule
  ]
})
export class CatalogModule { }
