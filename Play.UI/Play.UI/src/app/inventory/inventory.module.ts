import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InventoryListComponent } from './containers/inventory-list/inventory-list.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'inventory', component: InventoryListComponent }
    ]),
    SharedModule
  ]
})
export class InventoryModule { }
