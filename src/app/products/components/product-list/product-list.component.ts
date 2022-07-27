import { Component, OnInit } from '@angular/core';
import { productsInWishList } from '../../../cart/products-in-wish-list';
import { productsInCart } from '../../../cart/products-in-cart';
import { IProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: IProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddProductToCart(product: IProductModel): void {
    if (product.available) {
      productsInCart.push(product);
    }
  }

  onAddProductToWishList(product: IProductModel): void {
    productsInWishList.push(product);
  }
}
