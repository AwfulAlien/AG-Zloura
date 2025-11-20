import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { CategoriesComponent } from './components/categories/categories';
import { ProductsComponent } from './components/products/products';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, CategoriesComponent, ProductsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Zloura';
}
