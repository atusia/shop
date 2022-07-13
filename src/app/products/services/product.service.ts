import { Injectable } from '@angular/core';

import { products } from '../products-list';
import { IProductModel } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProductModel[] {
    return products;
  }
}
