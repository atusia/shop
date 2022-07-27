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
  totalCost!: number;
  totalQuantity!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getProducts();
    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: IProductModel): string { 
    return item.itemNumber; 
  }
}
