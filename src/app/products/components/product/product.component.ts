import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: IProductModel;
  @Output() addedProductToCart = new EventEmitter<IProductModel>();
  @Output() addedProductToWishList = new EventEmitter<IProductModel>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addedProductToCart.emit(this.product);
    console.log(`The "${this.product.title}" was added to cart!`);
  }

  onAddToWishList(): void {
    this.addedProductToWishList.emit(this.product);
    console.log(`The "${this.product.title}" was added to wish list!`);
  }
}
