import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  exports: [
		ProductListComponent,
	],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProductsModule { }
