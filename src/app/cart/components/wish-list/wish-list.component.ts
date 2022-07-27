import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/app/products/models/product.model';
import { WishListService } from '../../services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishList!: IProductModel[];

  constructor(private wishListService: WishListService) { }
  
  ngOnInit(): void {
    this.wishList = this.wishListService.getProducts();
  }

  trackByItems(index: number, item: IProductModel): string { 
    return item.itemNumber; 
  }
}
