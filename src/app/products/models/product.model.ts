import { GoodsCategory } from "./enums/category.enum";

export interface IProductModel {
    title: string;
    itemNumber: string;
    price: number;
    description: string;
    image?: string;
    category: GoodsCategory
}