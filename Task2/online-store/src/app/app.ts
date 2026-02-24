import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],  // Без RouterOutlet пока
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {  // ← ИМЯ КЛАССА ВАЖНО!
  title = 'online-store';
}