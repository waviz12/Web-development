import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  products: Product[] = [
    // Смартфоны (categoryId = 1)
    { id: 1, name: 'iPhone 15 Pro Max', description: 'Смартфон Apple iPhone 15 Pro Max, 256 ГБ', price: 649990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70', images: [], link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113138420/', categoryId: 1, likes: 0 },
    { id: 2, name: 'Samsung S24 Ultra', description: 'Смартфон Samsung Galaxy S24 Ultra, 512 ГБ', price: 599990, rating: 4.9, image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bztdcau-539572190?$650_519_PNG$', images: [], link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-116043556/', categoryId: 1, likes: 0 },
    { id: 3, name: 'Xiaomi 14 Ultra', description: 'Смартфон Xiaomi 14 Ultra, 512 ГБ', price: 499990, rating: 4.7, image: 'https://i02.appmifile.com/24_01_sg/26/01/2025/8c6e8d1d-1f5d-4b2c-9b8a-3e5c5a5b5c5d.jpg?width=800&height=800', images: [], link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-512gb-118765432/', categoryId: 1, likes: 0 },
    { id: 4, name: 'Google Pixel 8 Pro', description: 'Смартфон Google Pixel 8 Pro, 256 ГБ', price: 449990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70', images: [], link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-256gb-115678901/', categoryId: 1, likes: 0 },
    { id: 5, name: 'OnePlus 12', description: 'Смартфон OnePlus 12, 512 ГБ', price: 399990, rating: 4.7, image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bztdcau-539572190?$650_519_PNG$', images: [], link: 'https://kaspi.kz/shop/p/oneplus-12-512gb-117654321/', categoryId: 1, likes: 0 },
    
    // Ноутбуки (categoryId = 2)
    { id: 6, name: 'MacBook Pro 14"', description: 'Ноутбук Apple MacBook Pro 14, M3 Pro, 1 ТБ', price: 1299990, rating: 4.9, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-pro-1-tb-118326020/', categoryId: 2, likes: 0 },
    { id: 7, name: 'ASUS ROG Zephyrus', description: 'Ноутбук ASUS ROG Zephyrus G16, i9, RTX 4080', price: 1199990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-119876543/', categoryId: 2, likes: 0 },
    { id: 8, name: 'Lenovo Legion 5', description: 'Ноутбук Lenovo Legion 5 Pro, Ryzen 7, RTX 4060', price: 899990, rating: 4.7, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-116543210/', categoryId: 2, likes: 0 },
    { id: 9, name: 'Dell XPS 15', description: 'Ноутбук Dell XPS 15, i7, OLED дисплей', price: 999990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/dell-xps-15-115432198/', categoryId: 2, likes: 0 },
    { id: 10, name: 'HP Spectre x360', description: 'Ноутбук HP Spectre x360, i7, сенсорный экран', price: 849990, rating: 4.7, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/hp-spectre-x360-114321987/', categoryId: 2, likes: 0 },
    
    // Наушники (categoryId = 3)
    { id: 11, name: 'AirPods Max', description: 'Наушники Apple AirPods Max, шумоподавление', price: 249990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/apple-airpods-max-113456789/', categoryId: 3, likes: 0 },
    { id: 12, name: 'Sony WH-1000XM5', description: 'Наушники Sony WH-1000XM5, шумоподавление', price: 199990, rating: 4.9, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-112345678/', categoryId: 3, likes: 0 },
    { id: 13, name: 'Bose QC Ultra', description: 'Наушники Bose QuietComfort Ultra, шумоподавление', price: 219990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-118765432/', categoryId: 3, likes: 0 },
    { id: 14, name: 'JBL Tour One M2', description: 'Наушники JBL Tour One M2, шумоподавление', price: 149990, rating: 4.6, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-117654321/', categoryId: 3, likes: 0 },
    { id: 15, name: 'Momentum 4', description: 'Наушники Sennheiser Momentum 4', price: 189990, rating: 4.7, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-116543210/', categoryId: 3, likes: 0 },
    
    // Планшеты (categoryId = 4)
    { id: 16, name: 'iPad Pro 13"', description: 'Планшет Apple iPad Pro 13", M4, 1 ТБ', price: 699990, rating: 4.9, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-m4-119876543/', categoryId: 4, likes: 0 },
    { id: 17, name: 'Tab S9 Ultra', description: 'Планшет Samsung Galaxy Tab S9 Ultra, 512 ГБ', price: 549990, rating: 4.8, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-118765432/', categoryId: 4, likes: 0 },
    { id: 18, name: 'Xiaomi Pad 6S', description: 'Планшет Xiaomi Pad 6S Pro, 256 ГБ', price: 299990, rating: 4.7, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/xiaomi-pad-6s-pro-117654321/', categoryId: 4, likes: 0 },
    { id: 19, name: 'Pixel Tablet', description: 'Планшет Google Pixel Tablet, 128 ГБ', price: 329990, rating: 4.6, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/google-pixel-tablet-116543210/', categoryId: 4, likes: 0 },
    { id: 20, name: 'Tab Extreme', description: 'Планшет Lenovo Tab Extreme, 256 ГБ', price: 399990, rating: 4.6, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021', images: [], link: 'https://kaspi.kz/shop/p/lenovo-tab-extreme-115432198/', categoryId: 4, likes: 0 }
  ];

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
