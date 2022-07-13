import { Component, OnInit } from '@angular/core';
import { IProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList!: IProductModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getProducts();
  }

  trackByItems(index: number, item: IProductModel): string { 
    return item.itemNumber; 
  }
}
