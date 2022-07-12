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
}
