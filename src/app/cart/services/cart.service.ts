import { Injectable } from '@angular/core';
import { IProductModel } from '../../products/models/product.model';
import { productsInCart } from '../products-in-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): IProductModel[] {
    return productsInCart;
  }

  getTotalCost(): number {
    let result = 0;
    productsInCart.forEach(item => result += item.price);
    return result;
  }

  getTotalQuantity(): number {
    return productsInCart.length;
  }
}
