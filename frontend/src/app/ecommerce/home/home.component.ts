import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "../products/products.component";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";
import {OrdersComponent} from "../orders/orders.component";
import {TokenStorageService} from '../services/token-storage.service';
import {ProfileComponent} from "../profile/profile.component";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {UserService} from "../services/user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;
  content?: string;
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

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
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
