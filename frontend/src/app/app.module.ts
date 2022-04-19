import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';
import {ProductsComponent} from './ecommerce/products/products.component';
import {ShoppingCartComponent} from './ecommerce/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './ecommerce/orders/orders.component';
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import { LoginComponent } from './ecommerce/login/login.component';
import { RegisterComponent } from './ecommerce/register/register.component';
import { ProfileComponent } from './ecommerce/profile/profile.component';
import { authInterceptorProviders } from './ecommerce/helpers/auth.interceptor';
import { HomeComponent } from './ecommerce/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [EcommerceService, authInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
