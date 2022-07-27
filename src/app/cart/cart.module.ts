import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';



@NgModule({
  declarations: [
    CartListComponent,
    WishListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent,
    WishListComponent
  ]
})
export class CartModule { }
