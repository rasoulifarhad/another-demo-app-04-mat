import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { YouTubePlayerModule} from '@angular/youtube-player'
import { MatFormFieldModule } from '@angular/material/form-field'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from "./products/products.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from "./auth/auth.module";

import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PlayerComponent } from './player/player.component';

@NgModule({
    declarations: [
        AppComponent,
        CopyrightDirective,
        NumericDirective,
        PermissionDirective,
        KeyLoggerComponent,
        PageNotFoundComponent,
        CartComponent,
        ButtonsComponent,
        CopyTextComponent,
        PlayerComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonToggleModule,
        ClipboardModule,
        ProductsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        GoogleMapsModule,
        YouTubePlayerModule
    ]
})
export class AppModule { }
