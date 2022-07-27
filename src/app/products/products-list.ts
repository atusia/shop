import { GoodsCategory } from "./models/enums/category.enum";

export const products = [
    {
        title: 'Short Sleeve Midi Dress',
        itemNumber: 'T67-520',
        price: 520,
        description: 'Regular side neck to hem 49" / 124cm. Machine washable. 100% Cotton.',
        image: '../../assets/images/T67-520s4.jpg',
        category: GoodsCategory.clothing,
        available: true
    },
    {
        title: 'Utility Style Messenger Bag',
        itemNumber: 'T71-816',
        price: 310,
        description: 'Secure, stylish and easy to wear. This utlity style messenger bag will complement your everyday wardrobe with ease.' + 
            ' Available in a variety of colours. Lining 100% Recycled polyester.',
        image: '../../assets/images/T71-816s.jpg',
        category: GoodsCategory.accesories,
        available: true
    },
    {
        title: 'Block Simple Sandals',
        itemNumber: 'T28-242',
        price: 450,
        description: 'With Memory Foam layer to help you stay on your feet all day in comfort and style.',
        image: '../../assets/images/T28-242s2.jpg',
        category: GoodsCategory.footware,
        available: false
    }
]