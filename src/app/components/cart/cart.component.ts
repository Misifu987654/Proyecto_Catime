import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  totalPrice = this.cartService.getTotalPrice();

  constructor(private cartService: CartService) {}
}
