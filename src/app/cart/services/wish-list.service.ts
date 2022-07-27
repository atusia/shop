import { Injectable } from '@angular/core';
import { IProductModel } from '../../products/models/product.model';
import { productsInWishList } from '../products-in-wish-list';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  constructor() { }

  getProducts(): IProductModel[] {
    return productsInWishList;
  }
}
