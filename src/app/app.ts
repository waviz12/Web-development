import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
    console.log('Категории:', this.categories);
    console.log('Все товары:', this.allProducts.length);
  }

  get filteredProducts() {
    if (!this.selectedCategoryId) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
