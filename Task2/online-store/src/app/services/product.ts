import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Смартфон Apple iPhone 15 Pro Max, 256 ГБ, титановый корпус, камера 48 МП',
      price: 649990,
      rating: 4.8,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70',
      images: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-gold?wid=5120&hei=2880&fmt=webp&qlt=70',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113138420/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Смартфон Samsung Galaxy S24 Ultra, 512 ГБ, титановый корпус, камера 200 МП',
      price: 599990,
      rating: 4.9,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bztdcau-539572190?$650_519_PNG$',
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bztdcau-539572190?$650_519_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bzgdcau-539572185?$650_519_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-s928-489374-sm-s928bzvdcau-539572188?$650_519_PNG$'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-116043556/'
    },
    {
      id: 3,
      name: 'MacBook Pro 14" M3 1TB',
      description: 'Ноутбук Apple MacBook Pro 14, чип M3 Pro, 1 ТБ SSD, 18 ГБ ОЗУ',
      price: 1299990,
      rating: 4.9,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021',
      images: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311052021',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery1-202310?wid=4000&hei=3076&fmt=jpeg&qlt=90&.v=1697136760337'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-pro-1-tb-118326020/'
    },
    {
      id: 4,
      name: 'Xiaomi Robot Vacuum S10',
      description: 'Робот-пылесос Xiaomi Robot Vacuum S10, лазерная навигация, влажная уборка',
      price: 89990,
      rating: 4.7,
      image: 'https://i02.appmifile.com/24_01_sg/26/01/2025/8c6e8d1d-1f5d-4b2c-9b8a-3e5c5a5b5c5d.jpg?width=800&height=800',
      images: [
        'https://i02.appmifile.com/24_01_sg/26/01/2025/8c6e8d1d-1f5d-4b2c-9b8a-3e5c5a5b5c5d.jpg?width=800&height=800',
        'https://i02.appmifile.com/24_01_sg/26/01/2025/9d7e8f2e-2g6e-5c3d-0c9b-4f6d6b6c6d7e.jpg?width=800&height=800',
        'https://i02.appmifile.com/24_01_sg/26/01/2025/0a1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p.jpg?width=800&height=800'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-107918324/'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim, 1 ТБ, поддержка 4K',
      price: 299990,
      rating: 4.9,
      image: 'https://gmedia.playstation.com/is/image/SI/ps5-slim-digital-edition-hero-01-en-15feb24?$1600px$',
      images: [
        'https://gmedia.playstation.com/is/image/SI/ps5-slim-digital-edition-hero-01-en-15feb24?$1600px$',
        'https://gmedia.playstation.com/is/image/SI/ps5-slim-console-features-01-en-12oct23?$1200px$',
        'https://gmedia.playstation.com/is/image/SI/ps5-slim-dualsense-controller-features-01-en-12oct23?$1200px$'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-116441865/'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}