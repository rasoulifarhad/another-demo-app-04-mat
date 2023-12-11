import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  @Input() id = -1;
  name = '';
  private productSub = new Subject<void>();
  constructor(private productViewService: ProductViewService)  {

  }

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
      this.productSub.next();
      this.productSub.complete();
  }

  private getProduct() {
    this.productViewService
        .getProduct(this.id)
        .pipe(
            takeUntil( this.productSub ))
              .subscribe(
                (product: Product) => {
                    if(product) {
                      this.name = product.name;
                    }
    });
  }
}
