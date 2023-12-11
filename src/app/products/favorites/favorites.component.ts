import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
