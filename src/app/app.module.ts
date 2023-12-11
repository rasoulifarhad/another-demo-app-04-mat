import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from "./products/products.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from "./auth/auth.module";

import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@NgModule({
    declarations: [
        AppComponent,
        CopyrightDirective,
        NumericDirective,
        PermissionDirective,
        KeyLoggerComponent,
        PageNotFoundComponent,
        CartComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ProductsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule,
    ]
})
export class AppModule { }
