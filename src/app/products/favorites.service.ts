import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  // constructor() {
  //   super();
  // }

  // override getProducts() : Observable<Product[]> {
  //     return super.getProducts().pipe(
  //       take(3)
  //     );
  // }
}
