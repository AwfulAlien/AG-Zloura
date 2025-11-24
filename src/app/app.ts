import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { CategoriesComponent } from './components/categories/categories';
import { ProductsComponent } from './components/products/products';
import { FooterComponent } from './components/footer/footer';

import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, CategoriesComponent, ProductsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Zloura';
}
