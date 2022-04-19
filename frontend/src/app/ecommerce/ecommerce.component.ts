import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {TokenStorageService} from './services/token-storage.service';
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;
  content?: string;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  @ViewChild('profileC')
  profileC: ProfileComponent;

  @ViewChild('registerC')
  registerC: RegisterComponent;

  @ViewChild('loginC')
  loginC: LoginComponent;

  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }

}
